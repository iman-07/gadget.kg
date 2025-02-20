const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); 

  console.log('Cart items', cartItems)
  console.log('Total price', totalPrice)

  return (
    <div className="w-[1170px] mx-auto py-6">
      <h2 className="text-center text-2xl mb-6">Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Ваша корзина пуста</p>
      ) : (
        <div>
          <div className="flex justify-center flex-wrap gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="w-[280px] h-[390px] p-2 mb-4 border rounded-lg shadow-lg">
                <img className="h-[240px] w-[100%] object-cover rounded-t-lg" src={item.image} alt={item.name} />
                <div className="p-2">
                  <p className="font-semibold text-center">{item.name}</p>
                  <p className="text-center">{item.price} сом</p>
                  <p className="text-center text-gray-500">Количество: {item.quantity}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, 'increment')}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, 'decrement')}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="bg-red-500 text-white py-1 px-3 mt-2 w-full"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-xl font-semibold">
              Общая сумма: {totalPrice.toLocaleString()} сом
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
