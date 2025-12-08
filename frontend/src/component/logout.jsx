import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        credentials: "include", 
      });
  
      if (response.ok) {
        const data = await response.json(); 
        logout(); 
        localStorage.removeItem("isLoggedIn");
        navigate("/login", { state: { logoutMessage: data.message } });
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  return (
    <button
      onClick={handleLogout}
      className="w-full py-3 bg-blue-600 opacity-60 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
