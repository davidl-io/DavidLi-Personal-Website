import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover transform translate-x-10 scale-75 opacity-90"
          src="/AboutPhoto.png"
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-screen px-4 lg:px-0">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold leading-none">
            <span>I'm </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">DAVID LI</span>
          </h1>
          <h2 className="mt-4 text-4xl font-medium">
            Electrical Engineer &amp; Coder
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            "Specializing in power systems and smart-grids, I'm passionate about digital transformation. As a coder, I'm interested in the intersection of Machine Learning and AI with traditional engineering."
          </p>
        </div>
      </div>
    </div>

    
  );
}

export default Hero;
