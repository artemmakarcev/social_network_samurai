import React from "react";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div className="container">
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
