import React from "react";

const MainContent = ({ subjects }) => {
  return (
    <main className="flex-1 p-5">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Your Vision, Our Platform</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </header>

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center justify-center bg-blue-100 h-32 rounded-lg">
          <h2 className="text-xl font-bold text-gray-700">Chemistry</h2>
        </div>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
          {subjects.map((subject, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold mx-auto relative" 
                style={{ background: `conic-gradient(#4caf50 ${subject.score}%, #e0e0e0 ${subject.score}%)` }}>
                <span className="absolute text-black">{subject.score}%</span>
              </div>
              <p className="mt-2 text-lg font-medium text-center">{subject.name}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MainContent;