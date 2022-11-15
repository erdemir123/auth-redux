import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { userObserver } from "../auth/firebase";

const AppRouter = () => {
  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    userObserver(dispatch);
  }, [currentUser]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
