import React from "react";

const WhatWeDoSection = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and beautiful interfaces.",
    },
    {
      title: "Web Development",
      description: "Building responsive and scalable web apps.",
    },
    {
      title: "Brand Strategy",
      description: "Creating unique and effective brand identities.",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
