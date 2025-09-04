import React from "react";

const Hero = () => {
  return (
    <div className=" mt-8 flex flex-col sm:flex-row border-1 border-gray-400">
      {/* left side area */}
      <div className="flex items-center justify-center sm:py-0 py-10 sm:w-1/2 w-full">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-md sm:text-base font-medium">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            OUR SERVICES
          </h1>

          <div className="flex items-center gap-2">
            <p className="text-md sm:text-base font-semibold">OUR SERVICES</p>
            <p className="w-10 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right side area */}
        <img src="https://imgs.search.brave.com/WnLS1QlFuR-GEOfECU2Ij41qWEIG3VFyy4Y-fvgHzOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81MDYv/MjM1L0hELXdhbGxw/YXBlci13aGl0ZS1o/ZXhhZ29uLWdlb21l/dHJpYy1zaGFwZXMt/d2hpdGUtYWVzdGhl/dGljLXRodW1ibmFp/bC5qcGc" alt="" className="sm:w-1/2 w-full" />
    </div>
  );
};

export default Hero;
