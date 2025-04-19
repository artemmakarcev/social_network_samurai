import React from "react";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ profileData, status, updateStatus, isOwner, savePhoto, saveProfileData }) => {
  return (
    <div className="container">
      <ProfileInfo
        profileData={profileData}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfileData={saveProfileData}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
