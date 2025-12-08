import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext"; // Adjust the path if needed

export default function Nav() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <nav className="p-4 bg-transparent shadow-md bg-opacity-70">
      <div className="container flex items-center justify-between px-6 mx-auto lg:px-12">
        <h5 className="text-xl font-bold ">EmoTune</h5>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="transition-colors duration-300 hover:text-gray-600">Home</Link>
          </li>  
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login" className="transition-colors duration-300 hover:text-gray-600">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/about" className="transition-colors duration-300 hover:text-gray-600">About</Link>
              </li>
              <li>
                <Link to="/profile" className="transition-colors duration-300 hover:text-gray-600">Profile</Link>
              </li>
              <li>
                <Link to="/video" className="transition-colors duration-300 hover:text-gray-600">Video</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
