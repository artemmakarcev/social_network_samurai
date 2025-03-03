import { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "./components/Common/Preloader/Preloader";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./reducers/app/appReducer";

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
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="profile/:userId" element={<ProfileContainer />} />
          <Route path="dialogs" element={<DialogsContainer />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path="friends" element={<Friends />} />
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

{
  /*             <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
              <Route index element={<ConcertsHome />} />
              <Route path=":city" element={<City />} />
              <Route path="trending" element={<Trending />} />
            </Route> */
}
