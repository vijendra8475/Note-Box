import Title from "./Title";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";

const LatestCollections = () => {
  // Academic Support Services

  const {products} = useContext(ShopContext)

  const academicServices = products.filter(
    (product) => product.category === "Academic Support"
  );

  const technicalServices = products.filter(
    (product) => product.category === "Technical Skills"
  );

  const careerServices = products.filter(
    (product) => product.category === "Career Growth"
  );

  const extraServices = products.filter(
    (product) => product.category === "Extra Value"
  );

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-4xl">
          🎓
          <Title t1={"ACADEMIC SUPPORT"} t2={"SERVICES"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-24">
          {academicServices.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="my-10">
        <div className="text-center py-8 text-4xl">
          💻
          <Title t1={"TECHNICAL SKILL"} t2={"SUPPORT"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-24">
          {technicalServices.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>


      <div className="my-10">
        <div className="text-center py-8 text-4xl">
          🛠
          <Title t1={"Career Growth"} t2={"SERVICES"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-24">
          {careerServices.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>


      <div className="my-10">
        <div className="text-center py-8 text-4xl">
          📦
          <Title t1={"Extra Value"} t2={"SERVICES"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-24">
          {extraServices.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestCollections;
