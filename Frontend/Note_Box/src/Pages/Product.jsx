import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../Context/ShopContext";
import {Star} from 'lucide-react'

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductsData = () => {
    const foundProduct = products.find((item) => item._id == productId);
    setProductData(foundProduct);
    setImage(foundProduct.image[0]);
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products, productData]);

  return productData ? (
    <div className="border-t pt-10">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Images */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto w-full lg:w-[20%]">
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setImage(img)}
                className={`cursor-pointer rounded-lg border ${
                  image === img ? "border-blue-600" : "border-gray-200"
                } w-24 h-24 object-cover`}
                alt="thumbnail"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={image}
              alt={productData.name}
              className="rounded-xl shadow-lg w-full max-h-[500px] object-contain bg-gray-50"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold">{productData.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500" />
            ))}
            <Star className="w-5 h-5 text-gray-400" />
            <p className="ml-2 text-gray-500">(122 Reviews)</p>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-blue-600">
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
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
          >
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="p-3 border rounded-lg">✅ 100% Original Product</div>
            <div className="p-3 border rounded-lg">💵 Cash on Delivery Available</div>
            <div className="p-3 border rounded-lg">🔄 Easy Return & Exchange</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b">
          <button className="px-6 py-3 border-b-2 border-blue-600 font-medium">
            Description
          </button>
          <button className="px-6 py-3 text-gray-500 hover:text-blue-600">
            Reviews (122)
          </button>
        </div>

        {/* Description Content */}
        <div className="p-6 text-gray-600 leading-relaxed">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals
            can showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence.
          </p>
          <p className="mt-4">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
