import React from "react";
import { ArrowRight } from "lucide-react";

const Hero_frame = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 mt-8 rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm font-medium text-gray-600 tracking-wide flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-[2px] bg-gray-600"></span>
            Trusted by Students
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-4">
            Get Ready-Made <span className="text-indigo-600">Tech Projects</span>  
            & Notes for Your College
          </h1>

          <p className="mt-4 text-gray-600 md:w-4/5">
            Save time and boost your grades with our curated collection of{" "}
            <span className="font-semibold">projects, practical notes, and study materials</span> built for Computer Application students.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
              Explore Services <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://illustrations.popsy.co/white/studying.svg"
            alt="Hero Illustration"
            className="w-4/5 md:w-full drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero_frame;
