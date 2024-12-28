import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";
import Pagination from "../Paggination/Pagination";

let Users = (props) => {
  const loadPage = (page) => {
    props.onPageChanged(page);
  };

  return (
    <div>
      <Pagination
        currentPage={props.currentPage}
        onPageChanged={loadPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        portionSize={10}
      />
      {props.users.map((user) => (
        // user.followed
        <div className={styles.userWrapper} key={user.id} id={"user" + user.id}>
          <NavLink to={"/profile/" + user.id}>
            <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />
          </NavLink>
          <div className={styles.userInfo}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div className={styles.userAction}>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
