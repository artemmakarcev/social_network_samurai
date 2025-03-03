import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs/dialogsReducer";
import profileReducer from "./profile/profileReducer";
import sidebarReducer from "./sidebar/sidebarReducer";
import usersReducer from "./users/usersReducer";
import authReducer from "./auth/authReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app/appReducer";

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
};

const store = configureStore({ reducer: reducers });

export default store;
