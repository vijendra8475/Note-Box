import React, { useContext, useEffect, useState } from 'react'
import { CreditCard, Smartphone, ShieldCheck } from "lucide-react";
import ShopContext from '../Context/ShopContext';

const Payment = () => {

    const {cartItems, products} = useContext(ShopContext)
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
    
        for (const items in cartItems) {
          tempData.push({
            _id: items,
            quantity: cartItems[items],
          });
        }
        setCartData(tempData);
      }, [cartItems]);
    
      useEffect(() => {
        console.log(cartData);
        
      }, [cartData])
      
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
            {/* Header */}
            <header className="w-full py-6 shadow-sm bg-white flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                    Secure Payment
                </h1>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 flex-col md:flex-row items-center justify-center gap-12 p-6">
                {/* Left Illustration */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://imgs.search.brave.com/DG2egem27j71zCMJpUWdG05Orvt2IQaE_QgQGYhC9l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvYnVzaW5l/c3NtYW4tcGF5aW5n/LXNob3BwaW5nLWJp/bGwtcGF5bWVudC1p/bGx1c3RyYXRpb24t/ZG93bmxvYWQtaW4t/c3ZnLXBuZy1naWYt/ZmlsZS1mb3JtYXRz/LS1pbnZvaWNlLXNh/bGVzLXByb21vdGlv/bmFsLXBhY2stZS1j/b21tZXJjZS1pbGx1/c3RyYXRpb25zLTEx/MDM2NTUwLnBuZw"
                        alt="Payment Illustration"
                        className="w-3/4 md:w-full drop-shadow-xl"
                    />
                </div>

                {/* Right Payment Card */}
                <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-8 max-w-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                        Complete Your Payment
                    </h2>

                    {/* Order Summary */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-xl border">
                        <h3 className="font-semibold text-gray-700 mb-2">Order Summary</h3>
                        {cartData.map((item, idx) => {
                            const product = products.find((p) => p._id === item._id);
                            return (
                                <div key={idx} className="flex justify-between text-gray-600 mb-1">
                                    <p>{product?.name}</p>
                                    <p>₹{product.price}</p>
                                </div>
                            );
                        })}
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-gray-800">
                            <p>Total</p>
                            <p>₹{cartData.map((item) => item.price).reduce((a, b) => a + b, 0)}</p>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                            <CreditCard size={20} /> Pay with Card
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                            <Smartphone size={20} /> Pay with UPI
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-green-600 text-white hover:bg-green-700 transition">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                alt="PayPal"
                                className="w-5 h-5"
                            />
                            Pay with PayPal
                        </button>
                    </div>

                    {/* Security Note */}
                    <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm justify-center">
                        <ShieldCheck size={18} className="text-green-500" />
                        <p>100% Secure Payment Gateway</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} CollegeMart • All rights reserved
            </footer>
        </div>
    );
}

export default Payment