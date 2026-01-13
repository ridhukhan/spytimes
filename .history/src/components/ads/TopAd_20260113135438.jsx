import React, { useEffect } from "react";

// Top Banner Ad Component (Fixed - Direct Banner Format)
export const TopAd = () => {
useEffect(() => {
// Banner ad configuration
const atOptions = {
'key': "b98d336197bb10ad2755087bdef3a0b5",
'format': "iframe",
'height': 250,
'width': 300,
'params': {}
};

// Create container
const container = document.getElementById('top-banner-container');
if (container && !container.querySelector('script')) {
  // Set options
  const optionsScript = document.createElement('script');
  optionsScript.text = `atOptions = ${JSON.stringify(atOptions)};`;
  container.appendChild(optionsScript);

  // Load ad script
  const adScript = document.createElement('script');
  adScript.src = 'https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js';
  adScript.async = true;
  container.appendChild(adScript);
}

}, []);

return (
<div className="w-full flex justify-center my-4">
<div id="top-banner-container" className="text-center"></div>
</div>
);
};
