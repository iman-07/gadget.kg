import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации

function AdminOrders() {
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
        <h2 className="text-3xl font-semibold text-gray-800">Управление заказами</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Список заказов</h3>

        <ul className="space-y-4">
          <li className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
            <div>
              <strong>Заказ #1</strong>
              <div>Дата: 24.02.2025</div>
              <div>Сумма: 5000 сом</div>
            </div>
            <div className="space-x-2">
              <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600">
                Изменить статус
              </button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                Удалить
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
            <div>
              <strong>Заказ #2</strong>
              <div>Дата: 23.02.2025</div>
              <div>Сумма: 7000 сом</div>
            </div>
            <div className="space-x-2">
              <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600">
                Изменить статус
              </button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                Удалить
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminOrders;
