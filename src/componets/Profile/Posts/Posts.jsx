import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const Posts = (props) => {
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  let postsElements = props.posts.map(({ id, title, src, likesCount }) => {
    return <Post key={id} title={title} src={src} likesCount={likesCount} />;
  });

  return (
    <div className={styles.postsBlock}>
      <h3> My post</h3>
      <div>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name="newPostText" placeholder="Enter post text" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

export default Posts;
