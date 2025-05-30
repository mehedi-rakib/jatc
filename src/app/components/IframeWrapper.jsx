'use client';
import { useEffect, useRef } from 'react';

const IframeWrapper = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Create a style element
        const style = iframeDoc.createElement('style');
        style.textContent = `
          ul.footer, footer { display: none !important; }
          body { background: transparent !important; }
          .bg { display: none !important; }
          #main { margin-bottom: 0 !important; }
        `;
        
        // Append the style to the iframe's head
        iframeDoc.head.appendChild(style);
      } catch (error) {
        console.log('Cannot access iframe content due to same-origin policy');
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="100%"
      height="800"
      title="JLPT Sample Questions"
      style={{
        border: 'none',
        background: 'transparent',
        overflow: 'hidden'
      }}
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default IframeWrapper;
