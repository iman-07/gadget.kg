// import React from "react";
// import { motion } from "framer-motion";
// import newsRE from '../../assets/img/ab1c0a8355773d08f02fc93f596f90eb.jpg';

// const New = ({ addToCart }) => {
//   const products = [
//     { id: 1, name: 'Товар 1', price: '50 сом', image: newsRE },
//     { id: 2, name: 'Товар 2', price: '420 сом', image: newsRE },
//     { id: 3, name: 'Товар 3', price: '63 сом', image: newsRE },
//     { id: 4, name: 'Товар 4', price: '750 сом', image: newsRE },
//   ];

//   return (
//     <div className="w-[1170px] mx-auto py-6">
//       <h2 className="text-center text-2xl mb-6">Новые товары</h2>
//       <div className="flex flex-nowrap justify-between gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="w-[280px] h-[390px] p-4 bg-white shadow-lg rounded-lg">
//             <img className="h-[240px] w-[100%] object-cover rounded-t-lg" src={product.image} alt={product.name} />
//             <div className="p-4">
//               <p className="text-center font-semibold">{product.name}</p>
//               <p className="text-center text-gray-600">{product.price}</p>
//               <motion.button
//                 onClick={() => addToCart(product)}
//                 initial={{ scale: 1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className="w-full bg-blue-500 text-white py-2  rounded-lg hover:bg-blue-600"
//               >
//                 в корзину
//               </motion.button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default New;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import newsRE from '../../assets/img/ab1c0a8355773d08f02fc93f596f90eb.jpg';

const New = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Товар 1', price: '50 сом', image: newsRE },
    { id: 2, name: 'Товар 2', price: '420 сом', image: newsRE },
    { id: 3, name: 'Товар 3', price: '63 сом', image: newsRE },
    { id: 4, name: 'Товар 4', price: '750 сом', image: newsRE },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 px-6">
      <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">Новые товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <Link to={`/product/${product.id}`}>
              <div className="overflow-hidden h-64">
                <img className="w-full h-full object-cover transition-transform transform hover:scale-110" src={product.image} alt={product.name} />
              </div>
            </Link>
            <div className="p-6">
              <p className="text-center text-xl font-semibold text-gray-800 mb-2">{product.name}</p>
              <p className="text-center text-lg text-gray-600 mb-4">{product.price}</p>
              <motion.button
                onClick={() => addToCart(product)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                В корзину
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
