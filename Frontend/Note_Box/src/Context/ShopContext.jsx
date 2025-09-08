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
    image: ["https://cdn-icons-png.flaticon.com/512/3094/3094850.png"],
    price: 0,
    category: "Academic Support"
  },
  {
    _id: "2",
    name: "Practical Notes & Lab Manuals",
    description: "Subject-wise practical notes with step-by-step solutions and screenshots.",
    image: ["https://cdn-icons-png.flaticon.com/512/2991/2991148.png"],
    price: 0,
    category: "Academic Support"
  },
  {
    _id: "3",
    name: "Assignment & Report Templates",
    description: "Professional templates for documentation, PPTs, and project reports.",
    image: ["https://cdn-icons-png.flaticon.com/512/2921/2921222.png"],
    price: 0,
    category: "Academic Support"
  },
  {
    _id: "4",
    name: "Solved Previous Year Papers",
    description: "Exam-ready solved papers and question banks for better preparation.",
    image: ["https://cdn-icons-png.flaticon.com/512/2847/2847455.png"],
    price: 0,
    category: "Academic Support"
  },
  {
    _id: "5",
    name: "Source Code Marketplace",
    description: "Reusable code snippets and modules for projects and assignments.",
    image: ["https://cdn-icons-png.flaticon.com/512/2721/2721297.png"],
    price: 0,
    category: "Technical Skills"
  },
  {
    _id: "6",
    name: "Learning Roadmaps & Cheat Sheets",
    description: "Step-by-step roadmaps and cheat sheets for programming & tools.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135715.png"],
    price: 0,
    category: "Technical Skills"
  },
  {
    _id: "7",
    name: "Workshops & Bootcamps",
    description: "Hands-on training sessions for MERN, AI/ML, Cybersecurity, and more.",
    image: ["https://cdn-icons-png.flaticon.com/512/1995/1995568.png"],
    price: 0,
    category: "Technical Skills"
  },
  {
    _id: "8",
    name: "Resume & Portfolio Templates",
    description: "Student-friendly resume and portfolio templates to stand out.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135715.png"],
    price: 0,
    category: "Career Growth"
  },
  {
    _id: "9",
    name: "Interview Prep Kits",
    description: "DSA, coding, and HR interview Q&A for placements and internships.",
    image: ["https://cdn-icons-png.flaticon.com/512/4359/4359963.png"],
    price: 0,
    category: "Career Growth"
  },
  {
    _id: "10",
    name: "Internship & Job Guidance",
    description: "Guides on internships, freelancing, and job preparation tips.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135692.png"],
    price: 0,
    category: "Career Growth"
  },
  {
    _id: "11",
    name: "Doubt Solving & Mentorship",
    description: "Community support and mentorship for project and subject doubts.",
    image: ["https://cdn-icons-png.flaticon.com/512/2659/2659360.png"],
    price: 0,
    category: "Extra Value"
  },
  {
    _id: "12",
    name: "Freelance Project Help",
    description: "Connect students with freelancing opportunities for extra income.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135712.png"],
    price: 0,
    category: "Extra Value"
  },
  {
    _id: "13",
    name: "Exam Preparation Kits",
    description: "Crash-course notes and MCQ PDFs for quick exam revision.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135790.png"],
    price: 0,
    category: "Extra Value"
  }
];

  const addToCart = (productId) => {


    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      cartData[productId] += 1;
      toast.success("Added to Cart");
    } else {
      toast.success("Added to Cart");
      cartData[productId] = 1;
    }
    setCartItems(cartData);
    console.log(cartItems);
    
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

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      let cartData = structuredClone(cartItems);

      cartData[itemId] = quantity;

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
