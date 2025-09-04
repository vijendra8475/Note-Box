import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  const products = [
    {
      _id: "1",
      name: "TailwindCSS",
      image: [
        "https://imgs.search.brave.com/O_xqLu1-LbgWzaQZi1lmTYylBPYVCs2bUnLt_5jPnJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1y/ZWFjdC0zZC1pY29u/LXBuZy1kb3dubG9h/ZC03NTc4MDEwLnBu/Zw",
      ],
      price: 0,
    },
    {
      _id: "2",
      name: "React.js",
      image: [
        "https://imgs.search.brave.com/oOsUaCDZ37iL-dBHbkT-7ts51LWV-UNtuGcaetwiz9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1q/YXZhc2NyaXB0LTNk/LWljb24tZG93bmxv/YWQtaW4tcG5nLWJs/ZW5kLWZieC1nbHRm/LWZpbGUtZm9ybWF0/cy0taHRtbC1sb2dv/LXZ1ZS1hbmd1bGFy/LWNvZGluZy1sYW5n/LXBhY2stbG9nb3Mt/aWNvbnMtNzU3Nzk5/MS5wbmc_Zj13ZWJw",
      ],
      price: 0,
    },
    {
      _id: "3",
      name: "Express.js",
      image: [
        "https://imgs.search.brave.com/2UO3-1gMse6DjwoG54jbmgh4qtOtw5kkQWFlFFVX-nY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1u/b2RlanMtM2QtaWNv/bi1wbmctZG93bmxv/YWQtNzU3ODAwMi5w/bmc",
      ],
      price: 0,
    },
    {
      _id: "4",
      name: "Node.js",
      image: [
        "https://imgs.search.brave.com/v65pFB12rWIqeIkVKnmvoODgDXx-NG9v_mq7R6GgWxE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n",
      ],
      price: 0,
    },
    {
      _id: "5",
      name: "MongoDB",
      image: [
        "https://imgs.search.brave.com/GHC6-62uVUXpbXw8AdvdJlEZzAyBVVy4X6JWpqgzwBE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL00vbW9uZ29k/Yi1sb2dvLTg1OUZDM/RjU0Ny1zZWVrbG9n/by5jb20ucG5n",
      ],
      price: 0,
    },
  ];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
          {products.map((product) => (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
          {products.map((product) => (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
          {products.map((product) => (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
          {products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestCollections;
