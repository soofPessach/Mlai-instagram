import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post/Post";
import IUser from "./interfaces/IUser";
import IPost from "./interfaces/IPost";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import NavBar from "./components/NavBar/NavBar";
import UpperNavBar from "./components/Profile/NavBar/NavBarP";
import { getUser } from "./requests/usersRequests";
import { addPost, getAllPosts, getUserPosts } from "./requests/postRequests";
import { addLike } from "./requests/likeRequests";

function App() {
  // const a = async () => {
  // console.log(await addLike(20, "test"));
  // };
  // a();
  return (
    <div>
      <UpperNavBar userName="SoofPe" />
      <NavBar />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
