import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(null)

  const fetchProductsData = () => {
    const foundProduct = products.find((item) => item._id == productId);
    setProductData(foundProduct);
    setImage(foundProduct.image[0]);
  };

  useEffect(() => {
    fetchProductsData();
    console.log(productData.sizes);
  }, [productId, products, productData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Products Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((image, index) => (
              <img
                onClick={() => setImage(image)}
                src={image}
                alt=""
                key={index}
                className="w-[50%] sm:w-full sm:mb-3 cursor-pointer flex-shrink-0"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* Product info */}
        <div className="flex-1">
          <p className="text-2xl mt-3 font-medium">{productData.name}</p>
          <div className="flex items-center gap-1">
            {/* <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" /> */}
            <p className="pl-2">(122)</p>
          </div>
          <div className="mt-5 font-medium text-3xl">{currency}{productData.price}</div>
          <p className="mt-5 text-gray-600 sm:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((thissize,idx) => (
                  <button key={idx} onClick={() => setSize(thissize)} className={`p-2 px-4 rounded-sm bg-gray-100 ${thissize == size ? ' border-2 border-orange-600' : ''}`}>{thissize}</button>
                ))
              }
            </div>
          </div>

          {/* Add to cart button */}
          <button onClick={() => addToCart(productId, size)} className="px-8 py-3 bg-black text-white text-sm active:bg-gray-700 cursor-pointer">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 flex flex-col gap-1 mt-5">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available in this product.</p>
            <p>Easy return and exchange policy in this product.</p>
          </div>
        </div>
      </div>

      {/* Review and Description area */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122) </p>
        </div>

        <div className="flex border p-6 flex-col text-sm text-gray-500 gap-4">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>


      {/* Related Products */}
      {/* <RelatedProducts category={productData.category} subCategory={productData.subCategory} productId={productId} /> */}
      
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
