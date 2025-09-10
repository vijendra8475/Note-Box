import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../Context/ShopContext";
import { Star, Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    const foundProduct = products.find((item) => item._id == productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Decorative background illustration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://undraw.co/api/illustrations/online-shopping.svg"
          alt="illustration"
          className="w-[600px] mx-auto mt-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images */}
          <div className="flex-1 flex flex-col lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto w-full lg:w-[18%]">
              {productData.image.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setImage(img)}
                  className={`cursor-pointer rounded-lg border-2 ${
                    image === img ? "border-blue-600" : "border-gray-200"
                  } w-24 h-24 object-cover transition hover:scale-105`}
                  alt="thumbnail"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-lg p-6">
              <img
                src={image}
                alt={productData.name}
                className="rounded-lg w-full max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              {productData.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
              <p className="ml-2 text-gray-500">(122 Reviews)</p>
            </div>

            {/* Price */}
            <div className="text-5xl font-extrabold text-blue-600 drop-shadow">
              {currency}
              {productData.price}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {productData.description}
            </p>

            {/* CTA */}
            <button
              onClick={() => addToCart(productId)}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition transform hover:scale-105"
            >
              🛒 Add to Cart
            </button>

            {/* Extra Info with Icons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2 p-4 border rounded-xl bg-white shadow-sm">
                <ShieldCheck className="text-green-500" />
                <span>100% Original Product</span>
              </div>
              <div className="flex items-center gap-2 p-4 border rounded-xl bg-white shadow-sm">
                <Truck className="text-blue-500" />
                <span>Cash on Delivery Available</span>
              </div>
              <div className="flex items-center gap-2 p-4 border rounded-xl bg-white shadow-sm">
                <RefreshCcw className="text-orange-500" />
                <span>Easy Return & Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <div className="flex border-b">
            <button className="px-6 py-3 border-b-2 border-blue-600 font-medium text-blue-600">
              Description
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-blue-600 transition">
              Reviews (122)
            </button>
          </div>

          {/* Description Content */}
          <div className="p-8 bg-white shadow-md rounded-xl mt-6 text-gray-600 leading-relaxed">
            <p>
              An e-commerce platform helps businesses and individuals sell
              products or services online. It creates a virtual marketplace
              where customers can browse, purchase, and engage—all without
              needing a physical store.
            </p>
            <p className="mt-4">
              Each product includes detailed descriptions, images, pricing, and
              variations. With features like secure checkout, easy navigation,
              and customer reviews, e-commerce websites make online shopping
              simple and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
