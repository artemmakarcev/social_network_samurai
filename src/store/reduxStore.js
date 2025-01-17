import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "../reducers/dialogsReducer";
import profileReducer from "../reducers/profileReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";
import { reducer as formReducer } from "redux-form";

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
};

const store = configureStore({ reducer: reducers });

export default store;
