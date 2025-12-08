import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Home } from "./pages/home";
import Mainpage from "./pages/Mainpage"
import Video from "./pages/Video";
import Profile from "./pages/profile";
import LoginContext from "./context/LoginContext";
import LoginContextProvider from "./context/LoginContextProvider";
import About from "./component/mainpage_sections/about";

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/video" element={<ProtectedRoute><Video /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Router>
    </LoginContextProvider>
  );
}

function ProtectedRoute({ children }) {
  const { isLoggedIn } = React.useContext(LoginContext);
  
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default App;
