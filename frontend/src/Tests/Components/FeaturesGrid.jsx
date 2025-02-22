import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-300 p-6 shadow-md text-center flex flex-col justify-center items-center w-full h-40 sm:h-48 md:h-40 mx-auto" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)" }}>
      <h3 className="text-blue-600 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-sm text-center">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      title: "Interactive Courses",
      description:
        "Our expertly crafted courses feature a dynamic mix of multimedia content, including videos, animations, and interactive activities.",
    },
    {
      title: "Personalized Learning",
      description:
        "SPIRO leverages advanced AI-driven technology to provide customized learning experiences.",
    },
    {
      title: "24/7 Access",
      description:
        "SPIRO ensures that learning is available whenever inspiration strikes.",
    },
    {
      title: "Global Reach",
      description: "Connect with learners and educators worldwide. ",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-10 px-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
