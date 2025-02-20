
// const ProductCard = ({ image, description, price, onAddToCart }) => {
//     return (
//       <div className="w-[288px] h-[380px] bg-[#fff] rounded-[20px] p-3"> {/* Устанавливаем ширину карточки */}
//         <img src={image} alt="hit" className="rounded-[14px]" />
//         <div className="mt-2">{description}</div>
//         <div className="flex justify-between mt-3 items-center">
//           <p>{price}</p>
//           <button
//             className="w-[100px] bg-amber-400 border-none rounded-1 h-[30px]"
//             onClick={onAddToCart} // При клике добавляем в корзину
//           >
//             В корзину
//           </button>
//         </div>
//       </div>
//     );  
//   };
  
//   export default ProductCard;
  


// import ProductCard from "../Product/ProductCArd"; // Импорт компонента

// const Hits = ({ cart, setCart }) => {
//   const products = [
//     { id: 1, image: 'image_url_1', description: 'Описание товара 1', price: '1000 ₽' },
//     { id: 2, image: 'image_url_2', description: 'Описание товара 2', price: '1200 ₽' },
//     { id: 3, image: 'image_url_3', description: 'Описание товара 3', price: '900 ₽' },
//     // Добавьте остальные товары
//   ];

//   // Функция добавления товара в корзину
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Обновляем корзину в localStorage
//       return updatedCart;
//     });
//   };

//   return (
//     <div className="mt-[50px] flex justify-center">
//       <div className="flex space-x-4">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             image={product.image}
//             description={product.description}
//             price={product.price}
//             onAddToCart={() => addToCart(product)} // Передаем функцию добавления товара
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hits;
