import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для создания навигации

function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Мой магазин',
    adminEmail: 'admin@shop.com',
    currency: 'сом',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const saveSettings = () => {
    // Здесь можно добавить логику для сохранения настроек (например, в localStorage)
    alert('Настройки сохранены!');
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <Link to="/admin/dashboard" className="text-gray-600 hover:text-gray-800 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h2 className="text-3xl font-semibold text-gray-800">Настройки админки</h2>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg">Название сайта</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg">Email админа</label>
          <input
            type="email"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg">Валюта</label>
          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          >
            <option value="сом">Сом</option>
            <option value="руб">Рубли</option>
            <option value="долл">Доллары</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={saveSettings}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Сохранить настройки
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
