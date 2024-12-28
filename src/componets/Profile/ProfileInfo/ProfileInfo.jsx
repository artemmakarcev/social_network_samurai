import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>;
  }

  return (
    <div>
      <h2>Hello</h2>
      <p>My name is {props.profile.fullName}</p>
      <div>
        <img src={props.profile.photos.large} alt="large"></img>
      </div>
      <h3>About me</h3>
      <div className={styles.descriptionBlock}>
        {props.profile.fullName} + {props.profile.aboutMe}
      </div>
      <div>
        Job status: {props.profile.lookingForAJob ? "active job search" : "not looking a job"} <br />
        Description: {props.profile.lookingForAJobDescription}
      </div>
      <h3>Personal details</h3>
      <ul className={styles.linksList}>
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
