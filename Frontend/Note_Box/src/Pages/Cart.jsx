import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../Context/ShopContext";
// import { assets } from '../assets/frontend_assets/assets';
import Title from "../components/Title";
import { Trash } from "lucide-react";
import { NavLink } from 'react-router-dom'
import { Trash2, ShoppingBag } from "lucide-react";


const Cart = () => {
  const { products, currency, cartItems, deleteProduct } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    console.log(cartItems);

    for (const items in cartItems) {
      tempData.push({
        _id: items,
        quantity: cartItems[items],
      });
    }
    setCartData(tempData);
    console.log(cartData);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 shadow-sm bg-white flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Your Cart
        </h1>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col lg:flex-row gap-10 p-6">
        {/* Cart Items */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
          {cartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <img
                src="https://cdni.iconscout.com/illustration/premium/preview/your-cart-is-empty-illustration-svg-download-png-1815069.png?f=webp&h=700"
                alt="Empty Cart"
                className="w-56 mb-6"
              />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartData.map((item,idx) => {
                const product = products.find((p) => p._id === item._id);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-6 border-b pb-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-3"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product?.name}
                      </h3>
                      <p className="text-gray-500">₹{product?.price}</p>
                      <div className="mt-2 flex items-center gap-3">
                        <button className="px-2 py-1 bg-gray-200 rounded-lg text-sm">
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="px-2 py-1 bg-gray-200 rounded-lg text-sm">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-semibold text-gray-800">
                        {currency} {(product?.price * item.quantity).toFixed(2)}
                      </p>
                      <button className="mt-2 text-red-500 hover:text-red-600">
                        <Trash2 size={20} onClick={() => deleteProduct(product._id)} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Order Summary */}
        {cartData.length > 0 && (
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-gray-600">
              {cartData.map((item) => {
                const product = products.find((p) => p._id === item._id);
                return (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {product?.name} × {item.quantity}
                    </span>
                    <span>₹{product?.price * item.quantity}</span>
                  </div>
                )
              })}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-gray-800 text-lg">
              <span>Total</span>
              <span>₹{
                cartData.reduce((total, item) => {
                  const product = products.find(p => p._id === item._id);
                  return total + (product?.price * item.quantity);
                }, 0).toFixed(2)
              }</span>
            </div>
            <NavLink to={'/payment'} className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-black text-white hover:bg-gray-800 transition">
              <ShoppingBag size={20} /> Proceed to Checkout
            </NavLink>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CollegeMart • All rights reserved
      </footer>
    </div>
  );
};

export default Cart;
