import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div id={props.id} className={styles.item}>
      <h3>{props.title}</h3>
      <img src={props.src} alt="avatar" />
      <div>
        <span>like {props.likesCount} </span>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
