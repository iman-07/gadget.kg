import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Подключаем компонент карточки товара
import Header from './Header'; // Подключаем компонент Header

const MainPage = () => {
  const [cart, setCart] = useState([]); // Состояние корзины

  // Данные для товаров
  const products = [
    { id: 1, name: 'Товар 1', price: '51.000 сом', image: '/images/product_1.jpg' },
    { id: 2, name: 'Товар 2', price: '42.000 сом', image: '/images/product_2.jpg' },
    { id: 3, name: 'Товар 3', price: '63.000 сом', image: '/images/product_3.jpg' },
    { id: 4, name: 'Товар 4', price: '75.000 сом', image: '/images/product_4.jpg' },
  ];

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Header cart={cart} setCart={setCart} /> {/* Передаем корзину в Header */}
      <div className="flex justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={() => addToCart(product)} // Передаем функцию добавления товара
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
