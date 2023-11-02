import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Social: React.FC = () => {
    return (
        <div className="fixed top-0 right-0 p-4 flex items-center space-x-4 bg-transparent">
            <a 
                href="https://www.instagram.com/david_li"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300"
                aria-label="David's Instagram"
            >
                <FaInstagram size={20} />
            </a>
            <a 
                href="https://www.linkedin.com/in/david-li/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300"
                aria-label="David's LinkedIn"
            >
                <FaLinkedinIn size={20} />
            </a>
            <a 
                href="https://github.com/david-li" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300"
                aria-label="David's GitHub"
            >
                <FaGithub size={20} />
            </a>
            <a 
                href="https://twitter.com/david_li"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
                aria-label="David's Twitter"
            >
                <FaTwitter size={20} />
            </a>
        </div>
    );
}

export default Social;
