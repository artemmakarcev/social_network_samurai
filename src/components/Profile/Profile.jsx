import React from "react";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({profile, status, updateStatus}) => {
  return (
    <div className="container">
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
