import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  {
    id: 1,
    name: "Einar",
  },
  {
    id: 2,
    name: "Una",
  },
  {
    id: 3,
    name: "Charles",
  },
  {
    id: 4,
    name: "Abbigail",
  },
  {
    id: 5,
    name: "Jarvis",
  },
];

let messages = [
  {
    id: 1,
    text: "Reprehenderit est dolorem dolorem nostrum qui.",
  },
  {
    id: 2,
    text: "Iusto est eos quo sint quod eos.",
  },
  {
    id: 3,
    text: "Reprehenderit est dolorem dolorem nostrum qui.",
  },
  {
    id: 4,
    text: "Vel explicabo qui et animi ex.",
  },
  {
    id: 5,
    text: "Reprehenderit est dolorem dolorem nostrum qui.",
  },
];

let posts = [
  { id: 1, titel: "Post1", src: "https://randomuser.me/api/portraits/men/1.jpg", likesCount: 11 },
  { id: 2, titel: "Post2", src: "https://randomuser.me/api/portraits/men/2.jpg", likesCount: 11 },
  { id: 3, titel: "Post3", src: "https://randomuser.me/api/portraits/men/3.jpg", likesCount: 11 },
  { id: 4, titel: "Post4", src: "https://randomuser.me/api/portraits/men/4.jpg", likesCount: 11 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
