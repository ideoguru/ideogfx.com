import React from "react";

const CaseStudiesSection = () => {
  const projects = [
    {
      image: "/e-commerce.png",
      title: "E-commerce App",
      description: "A modern online store.",
    },
    {
      image: "/case-study-frame.png",
      title: "Portfolio Website",
      description: "A creative portfolio.",
    },
    {
      image: "/e-commerce.png",
      title: "Corporate Dashboard",
      description: "Enterprise tools.",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-gray-800 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
