import React from 'react';  

import { Avatar } from "@nextui-org/react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaLocationDot } from "react-icons/fa6"; 

const Section_1: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full p-4">
        <Avatar 
          isBordered 
          color="white" 
          src="https://i.pravatar.cc/150?u=a04258114e29026708c" 
          className="w-40 h-40 text-large mb-8" 
        />

        <div className="text-center space-y-4">
          <h2 className="text-xl font-medium text-gray-700">
            Hello, I'm
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-800">
            David Li
          </h1>
          <h3 className="text-2xl font-semibold text-gray-600">
            Electrical Engineer + Software Developer
          </h3>
          <h3 className="text-xl text-gray-500">
            Specialized in Power Systems and Enthusiastic about AI
          </h3>

          <div className="flex items-center space-x-2 mt-4">
            
            <FaLocationDot size={32} />
            <span className="text-gray-600">Quito, Ecuador</span>
          </div>

        </div>

        <div className="flex mt-6 space-x-4">
            <a 
              href="https://www.linkedin.com/in/david-li/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors duration-300" 
              aria-label="David's LinkedIn"
            >
                <FaLinkedinIn size={32} />
            </a>
            <a 
              href="https://github.com/david-li" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-700 transition-colors duration-300" 
              aria-label="David's GitHub"
            >
                <FaGithub size={32} />
            </a>
            <a 
              href="https://twitter.com/david_li" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors duration-300" 
              aria-label="David's Twitter"
            >
                <FaXTwitter size={32} />
            </a>
        </div>
      </div>
    );
}

export default Section_1;