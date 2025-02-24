import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


import mainImage1 from "../../assets/img/hits img.jpg";
import image1 from "../../assets/img/ab1c0a8355773d08f02fc93f596f90eb.jpg";
import image2 from "../../assets/img/hits img.jpg";
import image3 from "../../assets/img/TV.jpg";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  
  const products = [
    { id: 1, name: 'Хит 1', price: 100, description: 'Описание товара 1', image: mainImage1, images: [image1, image2, image3] },
    { id: 2, name: 'Хит 2', price: 150, description: 'Описание товара 2', image: mainImage1, images: [image1, image2, image3] },
    { id: 3, name: 'Хит 3', price: 200, description: 'Описание товара 3', image: mainImage1, images: [image1, image2, image3] },
    { id: 4, name: 'Хит 4', price: 250, description: 'Описание товара 4', image: mainImage1, images: [image1, image2, image3] },
    { id: 5, name: 'Хит 5', price: 300, description: 'Описание товара 5', image: mainImage1, images: [image1, image2, image3] },
    { id: 6, name: 'Хит 6', price: 350, description: 'Описание товара 6', image: mainImage1, images: [image1, image2, image3] },
    { id: 7, name: 'Хит 7', price: 400, description: 'Описание товара 7', image: mainImage1, images: [image1, image2, image3] },
    { id: 8, name: 'Хит 8', price: 450, description: 'Описание товара 8', image: mainImage1, images: [image1, image2, image3] },
    { id: 9, name: 'Хит 9', price: 500, description: 'Описание товара 9', image: mainImage1, images: [image1, image2, image3] },
    { id: 10, name: 'Хит 10', price: 550, description: 'Описание товара 10', image: mainImage1, images: [image1, image2, image3] },
  ];

  // Находим товар по ID
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Товар не найден</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.image);

  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const totalPrice = product.price * quantity;
  const formattedPrice = totalPrice.toLocaleString(); 

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8">Подробности товара</h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-[350px] object-cover"
            src={currentImage}
            alt={product.name}
          />
          <div className="flex gap-4 p-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image-${index}`}
                className="w-20 h-20 object-cover cursor-pointer rounded-lg transition-transform transform hover:scale-105"
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-lg text-gray-700">{product.description}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={decrementQuantity}
              className="w-10 h-10 bg-blue-500 text-white rounded-full text-xl font-bold hover:bg-blue-600"
            >
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-10 h-10 bg-blue-500 text-white rounded-full text-xl font-bold hover:bg-blue-600"
            >
              +
            </button>
          </div>

          <p className="text-2xl font-semibold text-blue-600">
            Цена: {formattedPrice} сом
          </p>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-600 transition"
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
