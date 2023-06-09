import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import UserLayout from "./UserLayout";
import Attendance from "./components/Attendance";
import Food from "./components/Food";
import Profile from "./components/Profile";
import Room from "./components/Room";
import MS from "./components/MS";
import Complaints from "./components/Complaints";
import Help from "./components/Help";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/attendance" element={<Attendance />} />
          <Route path="/user/food" element={<Food />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/room" element={<Room />} />
          <Route path="/user/ms" element={<MS />} />
          <Route path="/user/complaints" element={<Complaints />} />
          <Route path="/user/help" element={<Help />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};
export default App;
