import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
  console.log(props.users.length);
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://steamuserimages-a.akamaihd.net/ugc/5098669332654194970/A1F0504837E6CDA815E1DCB682F8F3960E12333C/?imw=128&imh=128&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        fulName: "Name get",
        location: { city: "Moscow", country: "Russia" },
        status: "status string",
        isFollow: false,
      },
    ]);
  }

  let usersElements = props.users.map((user) => (
    <div key={user.id}>
      <span>
        <div>{<img className={styles.avatar} src={user.photoUrl} />}</div>
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
          <div>{user.fulName}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.location.country}</div>
          <div>{user.location.sity}</div>
        </span>
      </span>
    </div>
  ));

  return <div>{usersElements}</div>;
};

export default Users;
