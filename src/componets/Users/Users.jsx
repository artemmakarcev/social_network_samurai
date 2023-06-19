import React from "react";
import axios from "axios";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    let usersElements = this.props.users.map((user) => (
      <div key={user.id}>
        <span>
          <div>{<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />}</div>
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
    return <div>{usersElements}</div>;
  }
}

export default Users;
