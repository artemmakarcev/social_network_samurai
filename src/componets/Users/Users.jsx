import React from "react";
import axios from "axios";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        props.setUsers(response.data.items);
      });
    }
  };

  let usersElements = props.users.map((user) => (
    <div key={user.id}>
      <span>
        <div>{<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} />}</div>
        <div>
          {user.isFollow ? (
            <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.followUser(user.id)}>Follow</button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>user.location.country</div>
          <div>user.location.sity</div>
        </span>
      </span>
    </div>
  ));

  return (
    <div>
      <button onClick={getUsers}>GetUsers</button>
      {usersElements}
    </div>
  );
};

export default Users;
