import React from "react";
import styles from "./Post.module.css";

const Post = ({ id, title, src, likesCount }) => {
  return (
    <div id={id} className={styles.item}>
      <h3>{title}</h3>
      <img src={src} alt="avatar" />
      <div>
        <span>like {likesCount} </span>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
