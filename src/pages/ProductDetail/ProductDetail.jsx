// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import mainImage1 from "../../assets/img/hits img.jpg";
// import image1 from "../../assets/img/ab1c0a8355773d08f02fc93f596f90eb.jpg";
// import image2 from "../../assets/img/hits img.jpg";
// import image3 from "../../assets/img/TV.jpg";
// import Header from '../../components/Header/Header';

// const ProductDetail = ({ addToCart }) => {
//   const { id } = useParams();
  
//   const products = [
//     { id: 1, name: 'Хит 1', price: 100, description: 'Описание товара 1', image: mainImage1, images: [image1, image2, image3] },
//     { id: 2, name: 'Хит 2', price: 150, description: 'Описание товара 2', image: mainImage1, images: [image1, image2, image3] },
//   ];

//   const product = products.find((item) => item.id === parseInt(id));
//   if (!product) {
//     return <p className="text-center text-2xl font-semibold text-red-500">Товар не найден</p>;
//   }

//   const [quantity, setQuantity] = useState(1);
//   const [currentImage, setCurrentImage] = useState(product.image);

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));

//   const handleAddToCart = () => addToCart({ ...product, quantity });

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
//       <Header />
//       <div className="max-w-5xl mx-auto p-6">
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Подробности товара</h2>
//         <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden p-6">
//           <div className="w-full md:w-1/2 flex flex-col items-center">
//             <img className="w-full h-[350px] object-cover rounded-lg shadow-md" src={currentImage} alt={product.name} />
//             <div className="flex gap-3 mt-4">
//               {product.images.map((img, index) => (
//                 <img key={index} src={img} alt={`image-${index}`} className="w-16 h-16 rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-110" onClick={() => setCurrentImage(img)} />
//               ))}
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 px-6 flex flex-col justify-center space-y-4">
//             <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
//             <p className="text-lg text-gray-600">{product.description}</p>
//             <div className="flex items-center gap-4">
//               <button onClick={decrementQuantity} className="w-12 h-12 bg-gray-200 text-gray-800 rounded-lg text-2xl font-bold hover:bg-gray-300">-</button>
//               <span className="text-2xl font-semibold">{quantity}</span>
//               <button onClick={incrementQuantity} className="w-12 h-12 bg-gray-200 text-gray-800 rounded-lg text-2xl font-bold hover:bg-gray-300">+</button>
//             </div>
//             <p className="text-3xl font-bold text-blue-500">{(product.price * quantity).toLocaleString()} сом</p>
//             <button onClick={handleAddToCart} className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-md">Добавить в корзину</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ProductDetail.propTypes = {
//   addToCart: PropTypes.func.isRequired,
// };

// export default ProductDetail;


import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { products } from '../../components/products/Products'
import Header from '../../components/Header/Header';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  
  // Находим товар по id
  const product = products.find((item) => item.id === parseInt(id));

  // Если товар не найден, выводим ошибку
  if (!product) {
    return <p className="text-center text-2xl font-semibold text-red-500">Товар с таким ID не найден!</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.image);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // Убираем разделители и конвертируем строку в число
  const price = parseFloat(product.price.replace(/[^\d.-]/g, '').replace(',', '.'));

  const handleAddToCart = () => addToCart({ ...product, quantity });

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Подробности товара</h2>
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden p-6">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img className="w-full h-[350px] object-cover rounded-lg shadow-md" src={currentImage} alt={product.name} />
            <div className="flex gap-3 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`image-${index}`}
                  className="w-16 h-16 rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6 flex flex-col justify-center space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={decrementQuantity}
                className="w-12 h-12 bg-gray-200 text-gray-800 rounded-lg text-2xl font-bold hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-2xl font-semibold">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="w-12 h-12 bg-gray-200 text-gray-800 rounded-lg text-2xl font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <p className="text-3xl font-bold text-blue-500">{(price * quantity).toLocaleString()} сом</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
