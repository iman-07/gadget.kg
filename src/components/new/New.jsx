import React from "react";
import { motion } from "framer-motion";
import newsRE from '../../assets/img/ab1c0a8355773d08f02fc93f596f90eb.jpg'; // Пример изображения

const New = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Товар 1', price: '51.000 сом', image: newsRE },
    { id: 2, name: 'Товар 2', price: '42.000 сом', image: newsRE },
    { id: 3, name: 'Товар 3', price: '63.000 сом', image: newsRE },
    { id: 4, name: 'Товар 4', price: '75.000 сом', image: newsRE },
  ];

  return (
    <div className="w-[1170px] mx-auto py-6"> {/* Контейнер с фиксированной шириной и отступами */}
      <h2 className="text-center text-2xl mb-6">Новые товары</h2> {/* Заголовок секции */}
      <div className="flex flex-nowrap justify-between gap-6"> {/* Flex container с равномерным расстоянием между карточками */}
        {products.map((product) => (
          <div key={product.id} className="w-[280px] h-[390px] p-4 bg-white shadow-lg rounded-lg"> {/* Белая карточка с тенью и скругленными углами */}
            <img className="h-[240px] w-[100%] object-cover rounded-t-lg" src={product.image} alt={product.name} />
            <div className="p-4"> {/* Внутренний отступ для текста */}
              <p className="text-center font-semibold">{product.name}</p>
              <p className="text-center text-gray-600">{product.price}</p>
              <motion.button
                onClick={() => addToCart(product)} // Функция добавления товара в корзину
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Увеличение при наведении
                whileTap={{ scale: 0.9 }} // Уменьшение при нажатии
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600" // Кнопка добавления в корзину
              >
                в корзину
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
