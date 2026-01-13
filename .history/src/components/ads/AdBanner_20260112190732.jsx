import { memo } from 'react';

const AdBanner = memo(({ 
  adKey, 
  width = 300, 
  height = 250,
  title = "Advertisement"
}) => {
  if (!adKey) {
    return (
      <div 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`, 
          background: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '20px auto'
        }}
      >
        Ad Placeholder (Key Missing)
      </div>
    );
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { margin: 0; padding: 0; overflow: hidden; background: transparent; }
      </style>
    </head>
    <body>
      <script type="text/javascript">
        atOptions = {
          'key': '${adKey}',
          'format': 'iframe',
          'height': ${height},
          'width': ${width},
          'params': {}
        };
      </script>
      <script 
        type="text/javascript" 
        src="https://www.highperformanceformat.com/${adKey}/invoke.js"
        async
      ></script>
    </body>
    </html>
  `;

  return (
    <div 
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: '20px auto',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#f9f9f9'
      }}
    >
      <iframe
        title={title}
        width={width}
        height={height}
        srcDoc={htmlContent}
        frameBorder="0"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
      />
    </div>
  );
});

export default AdBanner;