import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <PostsContainer store={props.store} /* posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}  *//>
      Main content
    </div>
  );
};

export default Profile;
