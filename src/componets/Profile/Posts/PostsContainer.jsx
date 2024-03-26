/* 
Контейнерная компонента
*/
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../reducers/profileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
