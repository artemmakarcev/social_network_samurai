import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader></Preloader>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>My name is {profile.fullName}</p>
      <div>
        <img src={profile.photos.large} alt="large"></img>
      </div>
      <h3>About me</h3>
      <div className={styles.descriptionBlock}>{profile.aboutMe}</div>
      <div>
        Job status: {profile.lookingForAJob ? "active job search" : "not looking a job"} <br />
        <ProfileStatus initialStatus={status} updateStatus={updateStatus} />
        Description: {profile.lookingForAJobDescription}
      </div>
      <h3>Personal details</h3>
      <ul className={styles.linksList}>
        {(() => {
          const arr = [];
          for (let contact in profile.contacts) {
            arr.push(
              <li key={contact}>
                {contact} : {profile.contacts[contact]}
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
