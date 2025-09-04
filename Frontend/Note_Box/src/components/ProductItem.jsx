import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
const currency = '₹ ';
  return (
    <Link to={`/product/${product._id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img src={product.image[0]} alt={product.name} className="hover:scale-110 transition-transform duration-200 ease-in-out" />
      </div>
        <p className="mt-3 mb-1 text-sm">{product.name}</p>
        <p className="text-sm text-black">{currency}{product.price}</p>
    </Link>
  );
};

export default ProductItem;
