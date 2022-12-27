import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElements = props.posts.map(({ id, title, src, likesCount }) => {
    return <Post key={id} title={title} src={src} likesCount={likesCount} />;
  });

  return (
    <div className={styles.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea defaultValue="New post" />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
