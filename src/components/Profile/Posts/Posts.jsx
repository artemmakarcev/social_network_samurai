import styles from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";

const Posts = ({ addPost, posts }) => {
  let onAddPost = (values) => {
    addPost(values.newPostText);
  };

  let postsElements = posts.map(({ id, title, src, likesCount }) => {
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

const maxLength10 = maxLengthCreator(10);

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={TextArea} name="newPostText" placeholder="Enter post text" validate={[requiredField, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

export default Posts;
