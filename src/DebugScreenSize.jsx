// DebugScreenSize.jsx
import { useState, useEffect } from 'react';

const DebugScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let device = 'Desktop';
  if (width < 576) device = 'Mobile';
  else if (width < 768) device = 'Small Tablet';
  else if (width < 992) device = 'Tablet';

  return (
    <div style={{
      position: 'fixed',
      bottom: 10,
      right: 10,
      background: 'black',
      color: 'white',
      padding: '6px 12px',
      borderRadius: 4,
      fontSize: '12px',
      zIndex: 9999
    }}>
      {device} • {width}px
    </div>
  );
};

export default DebugScreenSize;