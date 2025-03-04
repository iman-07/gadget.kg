import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";
import Hits from "./components/hits/Hits";
import Section from "./components/Section/Section";
import New from "./components/new/New";
import CartPage from "./components/CartPage/CartPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";  
import Shopping from "./pages/shopPages/Shopping";
import Contact from "./pages/contact/Contact";
import Delivery from "./pages/delivery/Delivery";
import Link from "./components/reclama/Link";
import AdminDashboard from "./admin/AdminDashboard"; 
import AdminUsers from "./admin/AdminUsers"; 
import AdminProducts from "./admin/AdminProducts"; 
import AdminOrders from "./admin/AdminOrders";
import AdminSettings from "./admin/AdminSettings";
import Registration from "./pages/register/Registration";
import CheckoutPage from "./components/checkOutPage/Checkoutpage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Хит 1', price: '100.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 1' },
    { id: 2, name: 'Хит 2', price: '150.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 2' },
    { id: 3, name: 'Хит 3', price: '200.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 3' },
    { id: 4, name: 'Хит 4', price: '250.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 4' },
    { id: 5, name: 'Хит 5', price: '300.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 5' },
    { id: 6, name: 'Хит 6', price: '350.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 6' },
    { id: 7, name: 'Хит 7', price: '400.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 7' },
    { id: 8, name: 'Хит 8', price: '450.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 8' },
    { id: 9, name: 'Хит 9', price: '500.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 9' },
    { id: 10, name: 'Хит 10', price: '550.000 сом', image: './assets/img/hits img.jpg', description: 'Описание товара 10' },
  ];

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Section />
                <Hits addToCart={addToCart} />
                <Link />
                <New addToCart={addToCart} />
              </>
            }
          />
          <Route path="/about" element={<Shopping />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} addToCart={addToCart} />}
          />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
