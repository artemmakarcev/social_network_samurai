import React from "react";
import "./App.css";

import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import Friends from "./componets/Friends/Friends";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:profileId" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            {/* exact - точное совпадение. React Router v6 <Route path="/messages/*" element={<Messages/>} /> */}
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
