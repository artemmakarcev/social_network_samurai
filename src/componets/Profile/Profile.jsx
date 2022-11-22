import React from "react";
import nav from "../../nav.png";
import styles from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={nav} alt="nav" />
      </div>
      <div>
        <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="avatar" />
      </div>
      <Posts />
      Main content
    </div>
  );
};

export default Profile;
