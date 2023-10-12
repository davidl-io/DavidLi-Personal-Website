import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile View */}
      <div className="lg:hidden fixed top-0 left-0 h-full w-64 text-black transform transition-transform duration-300"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <ul className="flex flex-col items-center justify-start space-y-6 pt-10">
          <li>
            <a href="#" className="hover:text-gray-400">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About me</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <button className="lg:hidden p-4 text-black" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-64 text-black items-center justify-center space-y-6 py-4">
        <a href="#" className="hover:text-gray-400">Blog</a>
        <a href="#" className="hover:text-gray-400">Projects</a>
        <a href="#" className="hover:text-gray-400">About me</a>
      </div>
    </div>
  );
}

export default Navbar;
