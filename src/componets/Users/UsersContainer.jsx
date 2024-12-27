import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress } from "../../reducers/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI.getUsers({ pageNumber: this.props.pageNumber, pageSize: this.props.pageSize }).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers({ pageNumber, pageSize: this.props.pageSize }).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};
let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
