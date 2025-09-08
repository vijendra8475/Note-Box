import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../Context/ShopContext'
// import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import { Trash } from 'lucide-react';
const Cart = () => {

  const { products, currency, cartItems, updateQuantity, deleteProduct } = useContext(ShopContext);

  const [cartData, setCartData] = useState([])

  useEffect(() => {

    
    const tempData = [];
    console.log(cartItems);
    
    for(const items in cartItems) {
      tempData.push({
        _id : items,
        quantity : cartItems[items]
      })
    }
    setCartData(tempData);
    console.log(cartData);
  }, [cartItems])


  return (
    <div className='borser-t pt-14'>
      
      <div className="text-2xl mb-3">
        <Title t1={"YOUR"} t2={"CART"} />
      </div>

      <div>
        {
          cartData.map((item, idx) => {
            const productsData = products.find(product => product._id === item._id);

            return (
              <div key={idx} className='py-4 border-y text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className="flex items-center gap-6">
                  <img src={productsData?.image[0]} alt={productsData?.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{productsData?.name}</h3>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency} {productsData?.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border- bg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input min={1} type='number' onChange={e => updateQuantity(item._id, e.target.value)} defaultValue={item.quantity} className='max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border text-center' />
                <Trash onClick={() => deleteProduct(item._id, item.size)} className='w-4 mr-4 sm:w-5 cursor-pointer' />
                {/* <img  src={assets.bin_icon}  alt="" /> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart
