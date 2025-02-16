import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center h-screen px-6 lg:px-16 bg-white text-black">
      {/* Left Section: Text */}
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <h1 className="text-2xl lg:text-4xl font-bold">Your next</h1>
        <h2 className="text-7xl lg:text-9xl font-extrabold text-transparent bg-clip-text gradient-text mb-6 relative z-20">
          Upgrade.
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
          Crafting seamless User Experiences through innovative and user-centric
          UI/UX Design to elevate your Digital Transformation.
        </p>
        <button className="mt-8 px-10 py-4 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 flex items-center space-x-3">
          <span>Get Started</span>
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 relative mt-10 lg:mt-0">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <img
          src="/person-headset.png"
          alt="Person with Headset"
          className="relative max-w-full z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
