import React from "react";
import Navbar from "../components/Navbar";
import LatestCollections from "../components/LatestCollection";
import Hero_frame from "../components/Hero_frame";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      <Navbar />
      <main className="pt-24 space-y-28">
        <Hero_frame />
        <LatestCollections />
      </main>
    </div>
  );
};

export default Home;
