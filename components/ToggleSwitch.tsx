import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [activeView, setActiveView] = useState('List View');

  const toggleView = (view) => {
    setActiveView(view);
  };

  return (
    <div className="flex bg-gray-200 p-1 rounded-md jusstify-items-end">
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeView === 'List View'
            ? 'bg-white text-gray-800 shadow-sm'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => toggleView('List View')}
      >
        List View
      </button>
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeView === 'Map View'
            ? 'bg-white text-gray-800 shadow-sm'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => toggleView('Map View')}
      >
        Map View
      </button>
    </div>
  );
};

export default ToggleSwitch;