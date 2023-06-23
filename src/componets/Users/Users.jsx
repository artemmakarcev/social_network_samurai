import React from "react";
import axios from "axios";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let usersElements = this.props.users.map((user) => (
      <div key={user.id}>
        <span>
          <div>{<img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />}</div>
          <div>
            {user.isFollow ? (
              <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
            ) : (
              <button onClick={() => this.props.followUser(user.id)}>Follow</button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </span>
      </div>
    ));

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(event) => {
                  this.onPageChanged(p);
                }}
              >
                /{p}/
              </span>
            );
          })}
        </div>
        {usersElements}
      </div>
    );
  }
}

export default Users;
