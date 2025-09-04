import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  { Toaster } from 'react-hot-toast';
import Product from "./Pages/Product";
function App() {
  return (
    <>
    <div><Toaster/></div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
