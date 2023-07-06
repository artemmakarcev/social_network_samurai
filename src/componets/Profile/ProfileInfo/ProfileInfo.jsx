import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      <div>
        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="nav" />
      </div>
      <img src={props.profile.photos.large}></img>
      <div className={styles["descriptionBlock"]}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
