import React, { useState, useEffect } from 'react';

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
    <>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {/* Close Button */}
          <button
            onClick={() => setShowAd(false)}
            style={styles.closeButton}
          >
            ✕
          </button>
          
          {/* Ad Content */}
          <div style={styles.content}>
            <div style={styles.adContainer}>
              <ins 
                className="eas6a97888e33" 
                data-zoneid="5827872"
                style={{ display: 'block', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.2s'
  },
  content: {
    padding: '32px'
  },
  adContainer: {
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    padding: '32px',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};