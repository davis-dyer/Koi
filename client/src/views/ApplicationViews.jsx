import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
//import PostList from "./post/PostList";
import MainContainer from "../components/MainContainer";
import EventContainer from "../pages/events/EventContainer";

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
          
          {/* <Route path="postDetails/:id" element={<PostDetails />} /> */}

          {/* <Route path="userposts" element={isLoggedIn ? <UserPosts /> : <Navigate to="/login" />} />
          <Route path="addpost" element={isLoggedIn ? <PostForm /> : <Navigate to="/login" />} />
          <Route path="tags">
            <Route index
              element={
                isLoggedIn && role === "Admin"
                  ? <ListTags />
                  : <Navigate to="/login" />
              }
            />
            <Route path="new" element={
              isLoggedIn && role === "Admin"
                ? <TagForm />
                : <Navigate to="/login" />
            }
            />
            <Route path="edit/:tagName" element={
              isLoggedIn && role === "Admin"
                ? <TagForm />
                : <Navigate to="/login" />
            }
            />
          </Route>

          <Route path="categories">
            <Route index
              element={
                isLoggedIn && role === "Admin"
                  ? <ListCategories />
                  : <Navigate to="/login" />
              }
            />
            <Route path="new" element={
              isLoggedIn && role === "Admin"
                ? <CategoryForm />
                : <Navigate to="/login" />
            }
            />
            <Route path="edit/:catName" element={
              isLoggedIn && role === "Admin"
                ? <CategoryForm />
                : <Navigate to="/login" />
            }
            />
          </Route> */}

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};