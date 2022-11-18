import React from "react";
import nav from "../../nav.png";
import avatar from "../../avatar.png";
import styles from "./Profile.module.css";


const Profile = ()=>{
    return (
        <div className={styles.content}>
        <div>
          <img src={nav} alt="nav" />
        </div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          My post
          <div>New post</div>
          <div className={styles.posts}>
            <div className={styles.item}>post 1</div>
            <div className={styles.item}>post 2</div>
          </div>
        </div>
        Main content
      </div>
    )
}

export default Profile