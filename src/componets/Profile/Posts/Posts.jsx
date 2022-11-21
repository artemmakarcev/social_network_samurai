import React from "react";
import styles from "./Posts.module.css";
import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      My post
      <div>New post</div>
      <div className={styles.posts}>
        <Post title='Post1' src='https://randomuser.me/api/portraits/men/1.jpg'/>
        <Post title='Post2' src='https://randomuser.me/api/portraits/men/1.jpg'/>
        <Post title='Post3' src='https://randomuser.me/api/portraits/men/1.jpg'/>
        <Post title='Post4' src='https://randomuser.me/api/portraits/men/1.jpg'/>
      </div>
    </div>
  );
};

export default Posts;
