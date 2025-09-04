import { createContext, useState } from "react";
import toast from "react-hot-toast";

const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = `$`;
  const delivery_fee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState({});

  const products = [
  {
    _id: "1",
    name: "Mini & Major Project Kits",
    description: "Ready-made IT projects with source code, report, and documentation.",
    image: ["https://cdn-icons-png.flaticon.com/512/3094/3094850.png"], // placeholder
    price: 0,
  },
  {
    _id: "2",
    name: "Practical Notes & Lab Manuals",
    description: "Subject-wise practical notes with step-by-step solutions and screenshots.",
    image: ["https://cdn-icons-png.flaticon.com/512/2991/2991148.png"],
    price: 0,
  },
  {
    _id: "3",
    name: "Assignment & Report Templates",
    description: "Professional templates for documentation, PPTs, and project reports.",
    image: ["https://cdn-icons-png.flaticon.com/512/2921/2921222.png"],
    price: 0,
  },
  {
    _id: "4",
    name: "Solved Previous Year Papers",
    description: "Exam-ready solved papers and question banks for better preparation.",
    image: ["https://cdn-icons-png.flaticon.com/512/2847/2847455.png"],
    price: 0,
  },
];

  const addToCart = (productId, size) => {
    if (!size) {
      toast.error("Please select size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            count += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return count;
  };

  const updateQuantity = (itemId, size, quantity) => {
    if (quantity > 0) {
      let cartData = structuredClone(cartItems);

      cartData[itemId][size] = quantity;

      setCartItems(cartData);
    }
  };

  const getCartAmount = async () => {
    // let totalAmount = 0;
    // for (items in cartItems) {
    //   const product = products.find((prod) => prod._id === items);
    //   for (item in cartItems[items]) {
    //     try {
    //       if (product) {
    //         totalAmount += product.price * cartItems[items][item];
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }

    console.log(cartItems);
    
  };

  const deleteProduct = (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    }

    getCartAmount();

    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    showSearch,
    setShowSearch,
    search,
    setSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    deleteProduct,
    getCartAmount
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContext;
