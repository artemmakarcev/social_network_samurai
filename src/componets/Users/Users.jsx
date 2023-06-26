import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(event) => {
                props.onPageChanged(p);
              }}
            >
              /{p}/
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>{<img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />}</div>
            <div>
              {user.isFollow ? (
                <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
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
      ))}
    </div>
  );
};

export default Users;
