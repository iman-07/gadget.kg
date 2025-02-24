import Header from "../Header/Header";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, '').replace(',', '.')); 
    const quantity = Number(item.quantity); 

    if (isNaN(price) || isNaN(quantity)) {
      console.error('Invalid price or quantity', item);
      return acc;
    }

    return acc + price * quantity;
  }, 0);

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <Header/>
      <h2 className="text-center text-3xl font-semibold mb-8">Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Ваша корзина пуста</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-[240px] object-cover" src={item.image} alt={item.name} />
                <div className="p-4">
                  <p className="text-xl font-semibold text-center text-gray-800">{item.name}</p>
                  <p className="text-center text-gray-600 text-lg">{item.price} сом</p>
                  <p className="text-center text-gray-400 text-sm">Количество: {item.quantity}</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, 'increment')}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full text-2xl font-bold hover:bg-blue-700 transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, 'decrement')}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full text-2xl font-bold hover:bg-blue-700 transition"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-semibold text-gray-800">
              Общая сумма: {totalPrice.toLocaleString()} сом
            </p>
            <button className="mt-6 bg-green-600 text-white py-2 px-8 rounded-lg hover:bg-green-700 transition">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
