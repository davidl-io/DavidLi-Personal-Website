import React from 'react';  

const Hero: React.FC = () => {
    return (
      <div className="flex flex-col items-start justify-center">

        <div className="text-left">
          <h1 className="text-5xl font-futura-bold leading-tight">
              <span className="text-color-1">I'm </span>
              <span className="text-color-5">DAVID LI</span>
          </h1>
          <h2 className="text-5xl font-futura-medium leading-snug">
            Electrical Engineer
          </h2>
          <h2 className="text-5xl font-futura-medium leading-snug">
            Software Developer
          </h2>
          <p className="text-xl font-souvenir leading-relaxed max-w-4xl">
            "Specializing in power systems and smart-grids, I'm passionate about digital transformation. I'm also a coder and am interested in how Machine Learning and AI can be applied."
          </p>

        </div>
        
      </div>
    );
}

export default Hero;
