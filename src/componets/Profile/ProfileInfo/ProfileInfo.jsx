import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="nav" />
      </div>
      <div className={styles["descriptionBlock"]}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
