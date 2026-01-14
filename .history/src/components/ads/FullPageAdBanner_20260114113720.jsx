import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AdPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://a.pemsrv.com/ad-provider.js"]');
    
    if (!existingScript) {
      // Load the ad provider script
      const script = document.createElement('script');
      script.src = 'https://a.pemsrv.com/ad-provider.js';
      script.async = true;
      script.type = 'application/javascript';
      
      script.onload = () => {
        setScriptLoaded(true);
        // Initialize AdProvider
        if (window.AdProvider) {
          window.AdProvider.push({ serve: {} });
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load ad script');
      };
      
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ExoClick Ad Integration Demo
          </h1>
          <p className="text-gray-600 mb-6">
            এই component টি ExoClick এর ad script সুন্দরভাবে integrate করে এবং popup হিসেবে দেখায়।
          </p>
          
          <button
            onClick={openPopup}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
          >
            Show Advertisement
          </button>
          
          <div className="mt-4 text-sm text-gray-500">
            Script Status: {scriptLoaded ? '✅ Loaded' : '⏳ Loading...'}
          </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
              
              {/* Ad Container */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Advertisement
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                  {scriptLoaded ? (
                    <ins 
                      className="eas6a97888e33" 
                      data-zoneid="5827872"
                      style={{ display: 'block' }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading advertisement...</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 text-center">
                  <button
                    onClick={closePopup}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Features:
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Responsive popup modal design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Script loading এর proper handling</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Close button সহ user-friendly interface</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Loading state indicator</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Modern এবং clean design</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}