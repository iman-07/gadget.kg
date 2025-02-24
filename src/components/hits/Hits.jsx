
import { Link } from "react-router-dom";
import s from '../../assets/img/hits img.jpg';

const Hits = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Хит 1', price: '100 сом', image: s, description: 'Описание товара 1' },
    { id: 2, name: 'Хит 2', price: '150 сом', image: s, description: 'Описание товара 2' },
    { id: 3, name: 'Хит 3', price: '200 сом', image: s, description: 'Описание товара 3' },
    { id: 4, name: 'Хит 4', price: '250 сом', image: s, description: 'Описание товара 4' },
    { id: 5, name: 'Хит 5', price: '300 сом', image: s, description: 'Описание товара 5' },
    { id: 6, name: 'Хит 6', price: '350 сом', image: s, description: 'Описание товара 6' },
    { id: 7, name: 'Хит 7', price: '400 сом', image: s, description: 'Описание товара 7' },
    { id: 8, name: 'Хит 8', price: '450 сом', image: s, description: 'Описание товара 8' },
    { id: 9, name: 'Хит 9', price: '500 сом', image: s, description: 'Описание товара 9' },
    { id: 10, name: 'Хит 10', price: '550 сом', image: s, description: 'Описание товара 10' },
  ];
  
  return (
    <div className="w-[1170px] mx-auto py-6">
      <h2 className="text-center text-2xl mb-6">Наши Хиты</h2>
      <div className="overflow-x-auto overflow-y-hidden h-[450px]">
        <div className="flex gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-[280px] h-[390px] p-4 bg-slate-100 shadow-lg rounded-lg flex-shrink-0">
              <Link to={`/product/${product.id}`}>
                <img className="h-[240px] w-[100%] object-cover rounded-t-lg cursor-pointer" src={product.image} alt={product.name} />
              </Link>
              <div className="p-4">
                <p className="text-center font-semibold">{product.name}</p>
                <p className="text-center text-gray-600">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 "
                >
                  в корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hits;


