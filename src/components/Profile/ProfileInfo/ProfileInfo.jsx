import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/avatar.png";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profileData, status, updateStatus, isOwner, savePhoto, saveProfileData }) => {
  if (!profileData) {
    return <Preloader />;
  }

  const [editMode, setEditMode] = useState(false);

  const handlerPhotoChanged = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    console.log(saveProfileData);
    saveProfileData(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.photoContainer}>
        <img src={profileData.photos.large || userPhoto} alt="large" className={styles.mainPhoto}></img>
        {isOwner && (
          <div className={styles.uploadPhoto}>
            <label>Change photo</label>
            <input type="file" name="photo" accept="image/png, image/jpeg, image/jpg" onChange={handlerPhotoChanged}></input>
          </div>
        )}
      </div>
      {editMode ? (
        <ProfileDataForm profileData={profileData} status={status} isOwner={isOwner} onSubmit={onSubmit} />
      ) : (
        <ProfileData
          profileData={profileData}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          toggleEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

const ProfileData = ({ profileData, status, updateStatus, isOwner, toggleEditMode }) => {
  return (
    <div className={styles.information}>
      <h3>About me</h3>
      <div className={styles.blockInfo}>
        <p>
          <strong>My name is: </strong>
          {profileData.fullName}
        </p>
        <p>
          <strong>Status: </strong>
          {<ProfileStatus initialStatus={status} updateStatus={updateStatus} isOwner={isOwner} />}
        </p>
        <p>
          <strong>Job status: </strong>
          {profileData.lookingForAJob ? "active job search" : "not looking a job"}
        </p>
        <p>
          <strong>Description: </strong>
          {profileData.lookingForAJobDescription}
        </p>
      </div>
      <h3>Social networks</h3>
      <div className={[styles.linksList, styles.blockInfo].join(" ")}>
        {Object.keys(profileData.contacts).map((key, index) => {
          return <Contact key={"link" + index} index={index} title={key} value={profileData.contacts[key]} />;
        })}
      </div>
      {isOwner ? (
        <button key="editContact" onClick={toggleEditMode}>
          Edit
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const Contact = ({ index, title, value }) => {
  return <div>{value !== null ? <a href={value}>{title} ✅</a> : <a href="#"> {title} ❌</a>}</div>;
};

export default ProfileInfo;
