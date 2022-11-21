import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.src} alt="avatar" />
      {props.title}
      <div>
        <span>like</span>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
