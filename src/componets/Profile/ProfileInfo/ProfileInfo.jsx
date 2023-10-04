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
        <img src={props.profile.photos.large} alt="large"></img>
      </div>
      <div className={styles.descriptionBlock}>
        {props.profile.fullName} + {props.profile.aboutMe}
      </div>
      <ul>
        {(() => {
          const arr = [];
          for (let contact in props.profile.contacts) {
            arr.push(
              <li key={contact}>
                {contact} : {props.profile.contacts[contact]}
              </li>
            );
          }
          return arr;
        })()}
      </ul>
    </div>
  );
};

export default ProfileInfo;
