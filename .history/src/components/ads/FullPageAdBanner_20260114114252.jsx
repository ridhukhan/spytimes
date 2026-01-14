import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function FullPageAdBanner() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Load ad script
    const script = document.createElement('script');
    script.src = 'https://a.pemsrv.com/ad-provider.js';
    script.async = true;
    script.type = 'application/javascript';
    
    script.onload = () => {
      if (window.AdProvider) {
        window.AdProvider.push({ serve: {} });
      }
    };
    
    document.head.appendChild(script);

    // Show ad after 2 seconds
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={() => setShowAd(false)}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all z-10"
        >
          <X size={24} />
        </button>
        
        {/* Ad Content */}
        <div className="p-8">
          <div className="bg-gray-100 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <ins 
              className="eas6a97888e33" 
              data-zoneid="5827872"
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}