import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
//import PostList from "./post/PostList";
import MainContainer from "../components/MainContainer";
import EventContainer from "../pages/events/EventContainer";
import GroupContainer from "../pages/groups/GroupContainer";
import GroupDetails from "../pages/groups/GroupDetails";
import About from "../pages/about/About";
import Event from "../pages/events/Event";
import Profile from "../pages/Profile";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={isLoggedIn ? <MainContainer /> : <Navigate to="/login" /> } />
          <Route path="home" element={<MainContainer />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="events" element={<EventContainer />} />
          <Route path="events/:id" element={<Event />} />
          <Route path="groups" element={<GroupContainer />} />
          <Route path="groups/:id" element={<GroupDetails />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};