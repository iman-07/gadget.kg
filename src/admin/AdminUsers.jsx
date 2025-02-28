import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (email) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter((user) => user.email !== email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <button
        onClick={() => navigate('/admin/dashboard')}
        className="absolute top-4 left-4 text-2xl text-gray-700 hover:text-gray-900"
      >
        &#8592; {/* Стрелка назад */}
      </button>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Управление пользователями</h2>
      {users.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">Нет зарегистрированных пользователей</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div className="flex-1">
                <p className="text-gray-700 text-lg">Email: <span className="font-semibold">{user.email}</span></p>
                <p className="text-gray-700 text-lg">Имя пользователя: <span className="font-semibold">{user.username}</span></p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(user.email)}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminUsers;
