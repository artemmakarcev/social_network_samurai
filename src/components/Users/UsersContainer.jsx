import { setCurrentPage, toggleFollowingInProgress, requestUsers, setFollow, deleteFollow } from "../../reducers/users/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getShowUsersLimit,
  getTotalUsersCount,
  getUsersReselect,
} from "../../reducers/users/usersSelectors";
import { useEffect } from "react";
import Pagination from "../Common/Pagination/Pagination";

const UsersContainer = ({
  requestUsers,
  currentPage,
  showUsersLimit,
  getUsers,
  isFetching,
  totalUsersCount,
  users,
  setFollow,
  deleteFollow,
  followingInProgress,
  setCurrentPage,
}) => {
  useEffect(() => {
    requestUsers(currentPage, showUsersLimit);
  }, [currentPage, showUsersLimit, getUsers]);

  const onPageChanged = (pageNumber) => {
    requestUsers(pageNumber, showUsersLimit);
    setCurrentPage(pageNumber);
  };

  if (isFetching) return <Preloader />;

  return (
    <>
      <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={showUsersLimit} />
      <Users users={users} follow={setFollow} unfollow={deleteFollow} followingInProgress={followingInProgress} />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsersReselect(state),
    showUsersLimit: getShowUsersLimit(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

let mapDispatchToProps = {
  setFollow,
  deleteFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  requestUsers,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);
