/* 
Контейнерная компонента
*/

import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import Posts from "./Posts";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        /* Презентационная компонента */
        return <Posts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText} />;
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
