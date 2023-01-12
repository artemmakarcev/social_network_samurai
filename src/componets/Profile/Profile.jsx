import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Posts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
      Main content
    </div>
  );
};

export default Profile;
