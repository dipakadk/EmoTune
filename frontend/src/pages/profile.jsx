import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../component/Nav';
import emotune from "../images/backgroundsign.jpg";
import LogoutButton from '../component/logout';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching user information');
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center text-lg font-semibold">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${emotune})` }}>
      <Nav />
      {user ? (
        <div className="bg-gray-900 bg-opacity-30 shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-5">
          <h1 className="text-4xl font-bold text-white">Welcome, {user.name}!</h1>
          <p className="text-white text-lg"><span className="font-semibold">Email:</span> <span className="text-blue-100">{user.email}</span></p>
          <p className="text-white text-lg"><span className="font-semibold">User ID:</span> <span className="text-blue-100">{user.id}</span></p>
        </div>
      ) : (
        <div className="text-xl text-gray-700 font-semibold">Loading...</div>
      )}
      
      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Profile;
