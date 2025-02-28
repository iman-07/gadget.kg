import { Link } from "react-router-dom";
import s from "../../assets/img/hits img.jpg";

const Hits = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Хит 1", price: "100 сом", image: s },
    { id: 2, name: "Хит 2", price: "150 сом", image: s },
    { id: 3, name: "Хит 3", price: "200 сом", image: s },
    { id: 4, name: "Хит 4", price: "250 сом", image: s },
    { id: 5, name: "Хит 5", price: "300 сом", image: s },
    { id: 6, name: "Хит 6", price: "350 сом", image: s },
    { id: 7, name: "Хит 7", price: "400 сом", image: s },
    { id: 8, name: "Хит 8", price: "450 сом", image: s },
    { id: 9, name: "Хит 9", price: "500 сом", image: s },
    { id: 10, name: "Хит 10", price: "550 сом", image: s },
  ];

  return (
    <div className="max-w-[1170px] mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Наши Хиты</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
             style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gridAutoFlow: 'column', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden transition-transform transform hover:scale-105 w-[250px] flex-shrink-0 snap-center"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  className="h-[200px] w-full object-cover cursor-pointer"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600 text-md mb-4">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  В корзину
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