import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, name: 'Товар 1', price: '100.000 сом', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Товар 2', price: '200.000 сом', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Товар 3', price: '300.000 сом', image: 'https://via.placeholder.com/150' },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = () => {
    setEditingProduct({ id: null, name: '', price: '', image: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const startEditing = (product) => {
    setEditingProduct(product);
  };

  const saveProduct = () => {
    if (editingProduct.id) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? editingProduct : product
        )
      );
    } else {
      const newProduct = {
        id: products.length + 1,
        name: editingProduct.name,
        price: editingProduct.price,
        image: editingProduct.image,
      };
      setProducts([...products, newProduct]);
    }
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({
      ...editingProduct,
      [name]: value,
    });
  };

  return (
    <div className="flex space-x-8 mt-5">
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            &#8592; {/* Стрелка назад */}
          </button>
          <h2 className="text-xl font-semibold">Список товаров</h2>
        </div>
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
              <div>
                <strong>{product.name}</strong>
                <div>{product.price}</div>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => startEditing(product)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {editingProduct ? 'Редактирование товара' : 'Добавление нового товара'}
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Название товара</label>
            <input
              type="text"
              name="name"
              value={editingProduct?.name || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Цена товара</label>
            <input
              type="text"
              name="price"
              value={editingProduct?.price || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Изображение товара (URL)</label>
            <input
              type="text"
              name="image"
              value={editingProduct?.image || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={saveProduct}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              {editingProduct?.id ? 'Сохранить изменения' : 'Добавить товар'}
            </button>
            <button
              onClick={() => setEditingProduct(null)}
              className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
