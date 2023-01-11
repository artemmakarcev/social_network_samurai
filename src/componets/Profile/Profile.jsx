import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Posts state={props.state} addPost={props.addPost}/>
      Main content
    </div>
  );
};

export default Profile;
