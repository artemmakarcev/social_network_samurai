import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElements = props.profilePage.posts.map(({ id, title, src, likesCount }) => {
    return <Post key={id} title={title} src={src} likesCount={likesCount} />;
  });

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
