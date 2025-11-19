import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios
      .get('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log('Profile data:', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        navigate('/login');
      });
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex items-center space-x-6 -mt-16">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-4xl font-bold">
                {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800">
                  {user.email || 'User'}
                </h2>
                <p className="text-gray-600 text-lg">{user.email}</p>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Account Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-gray-800 font-semibold text-lg">
                    {user.email}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Account Status</p>
                  <p className="text-green-600 font-semibold text-lg">Active</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">User ID</p>
                  <p className="text-gray-800 font-semibold text-lg">
                    {user.id || 'N/A'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Member Since</p>
                  <p className="text-gray-800 font-semibold text-lg">2025</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/logout');
                }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
