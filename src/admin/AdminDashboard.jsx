import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-[20px]">
        <div className="bg-[#373493] w-full h-[60px] text-white flex items-center justify-between px-4 shadow-md relative">
          <h3 className="text-xl font-semibold">Основные разделы</h3>
        </div>
        
        <div className="mt-[30px] bg-white p-6 rounded-lg shadow-lg">
          <ul className="space-y-4">
            <li className="hover:bg-[#f3f4f6] p-2 rounded-lg transition duration-300 ease-in-out">
              <Link to="/admin/products" className="text-[#373493] font-medium text-lg hover:text-[#1e2a5a]">
                Управление товарами
              </Link>
            </li>
            <li className="hover:bg-[#f3f4f6] p-2 rounded-lg transition duration-300 ease-in-out">
              <Link to="/admin/users" className="text-[#373493] font-medium text-lg hover:text-[#1e2a5a]">
                Управление пользователями
              </Link>
            </li>
            <li className="hover:bg-[#f3f4f6] p-2 rounded-lg transition duration-300 ease-in-out">
              <Link to="/admin/orders" className="text-[#373493] font-medium text-lg hover:text-[#1e2a5a]">
                Управление заказами
              </Link>
            </li>
            <li className="hover:bg-[#f3f4f6] p-2 rounded-lg transition duration-300 ease-in-out">
              <Link to="/admin/settings" className="text-[#373493] font-medium text-lg hover:text-[#1e2a5a]">
                Настройки
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
