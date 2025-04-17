import { lazy, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "./components/Common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./reducers/app/appReducer";
import { withSuspense } from "./hoc/withSuspense";

const News = lazy(() => delayForDemo(import("./components/News/News.jsx")));
const Music = lazy(() => delayForDemo(import("./components/Music/Music.jsx")));
const Settings = lazy(() => delayForDemo(import("./components/Settings/Settings.jsx")));
const Friends = lazy(() => delayForDemo(import("./components/Friends/Friends.jsx")));
const DialogsContainer = lazy(() => delayForDemo(import("./components/Dialogs/DialogsContainer.jsx")));

// Задержка для демонстрации работы ленивой загрузки
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initializeApp]);

  if (!props.initializeApp) return <Preloader className="PreLoader" />;

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/profile" />} />
          <Route path="profile" element={ProfileContainer} />
          <Route path="profile/:userId" element={ProfileContainer} />
          <Route path="dialogs" element={withSuspense(DialogsContainer)()} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="news" element={withSuspense(News)()} />
          <Route path="music" element={withSuspense(Music)()} />
          <Route path="settings" element={withSuspense(Settings)()} />
          <Route path="friends" element={withSuspense(Friends)()} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
