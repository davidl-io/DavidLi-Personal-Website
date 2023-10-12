import React from 'react';

const Section_2: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex">
        {/* Timeline Line */}
        <div className="flex flex-col items-center space-y-6 pr-4">
          <div className="w-3 h-3 border-1 border-gray-400 rounded-full"></div>
          <div className="w-0.5 h-20 border-1 bg-gray-400"></div>
          <div className="w-3 h-3 border-1 border-gray-400 rounded-full"></div>
          <div className="w-0.5 h-20 border-1 bg-gray-400"></div>
          <div className="w-3 h-3 border-1 border-gray-400 rounded-full"></div>
          <div className="w-0.5 h-20 border-1 bg-gray-400"></div>
          <div className="w-3 h-3 border-1 border-gray-400 rounded-full"></div>
        </div>

        {/* Timeline Content */}
        <div className="flex flex-col space-y-20">
          <div>
            <h4 className="text-lg font-semibold">Event 1</h4>
            <p className="text-gray-600">Details about the first event.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Event 2</h4>
            <p className="text-gray-600">Details about the second event.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Event 3</h4>
            <p className="text-gray-600">Details about the third event.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Event 4</h4>
            <p className="text-gray-600">Details about the fourth event.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
