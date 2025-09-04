import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  // Academic Support Services
const academicServices = [
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

// Technical Skills Support
const technicalServices = [
  {
    _id: "5",
    name: "Source Code Marketplace",
    description: "Reusable code snippets and modules for projects and assignments.",
    image: ["https://cdn-icons-png.flaticon.com/512/2721/2721297.png"],
    price: 0,
  },
  {
    _id: "6",
    name: "Learning Roadmaps & Cheat Sheets",
    description: "Step-by-step roadmaps and cheat sheets for programming & tools.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135715.png"],
    price: 0,
  },
  {
    _id: "7",
    name: "Workshops & Bootcamps",
    description: "Hands-on training sessions for MERN, AI/ML, Cybersecurity, and more.",
    image: ["https://cdn-icons-png.flaticon.com/512/1995/1995568.png"],
    price: 0,
  },
];

// Career Growth Services
const careerServices = [
  {
    _id: "8",
    name: "Resume & Portfolio Templates",
    description: "Student-friendly resume and portfolio templates to stand out.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135715.png"],
    price: 0,
  },
  {
    _id: "9",
    name: "Interview Prep Kits",
    description: "DSA, coding, and HR interview Q&A for placements and internships.",
    image: ["https://cdn-icons-png.flaticon.com/512/4359/4359963.png"],
    price: 0,
  },
  {
    _id: "10",
    name: "Internship & Job Guidance",
    description: "Guides on internships, freelancing, and job preparation tips.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135692.png"],
    price: 0,
  },
];

// Extra Value Services
const extraServices = [
  {
    _id: "11",
    name: "Doubt Solving & Mentorship",
    description: "Community support and mentorship for project and subject doubts.",
    image: ["https://cdn-icons-png.flaticon.com/512/2659/2659360.png"],
    price: 0,
  },
  {
    _id: "12",
    name: "Freelance Project Help",
    description: "Connect students with freelancing opportunities for extra income.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135712.png"],
    price: 0,
  },
  {
    _id: "13",
    name: "Exam Preparation Kits",
    description: "Crash-course notes and MCQ PDFs for quick exam revision.",
    image: ["https://cdn-icons-png.flaticon.com/512/3135/3135790.png"],
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
