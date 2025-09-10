import Title from "./Title";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import { BookOpen, Laptop, TrendingUp, Gift } from "lucide-react";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  const categories = [
    {
      id: "academic",
      icon: <BookOpen size={32} className="text-indigo-600" />,
      title1: "Academic Support",
      title2: "Services",
      desc: "Boost your studies with projects, notes, and resources crafted for students.",
      items: products.filter((p) => p.category === "Academic Support"),
    },
    {
      id: "technical",
      icon: <Laptop size={32} className="text-indigo-600" />,
      title1: "Technical Skills",
      title2: "Support",
      desc: "Hands-on coding projects and resources to upgrade your technical journey.",
      items: products.filter((p) => p.category === "Technical Skills"),
    },
    {
      id: "career",
      icon: <TrendingUp size={32} className="text-indigo-600" />,
      title1: "Career Growth",
      title2: "Services",
      desc: "Resume help, interview prep & portfolio-building guides for your career.",
      items: products.filter((p) => p.category === "Career Growth"),
    },
    {
      id: "extra",
      icon: <Gift size={32} className="text-indigo-600" />,
      title1: "Extra Value",
      title2: "Services",
      desc: "Exclusive packs, bonuses, and add-ons to maximize value.",
      items: products.filter((p) => p.category === "Extra Value"),
    },
  ];

  return (
    <section className="space-y-28 px-6 md:px-12">
      {categories.map((cat) => (
        <div key={cat.id}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">{cat.icon}</div>
            <Title t1={cat.title1} t2={cat.title2} />
            <p className="mt-2 text-gray-600 text-sm sm:text-base">{cat.desc}</p>
          </div>

          {/* Products */}
          <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cat.items.length > 0 ? (
              cat.items.map((p) => <ProductItem key={p._id} product={p} />)
            ) : (
              <p className="col-span-full text-center text-gray-400 italic">
                No services available in this category.
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default LatestCollections;
