"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const GIFs = [
  'webdev.gif',
  'mobile.gif',
  'blockchain.gif',
  'tutor.gif'
];

const GIFDisplay: React.FC = () => {
  const [currentGIFIndex, setCurrentGIFIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGIFIndex((prevIndex) => (prevIndex + 1) % GIFs.length);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Image src={`/gifs/${GIFs[currentGIFIndex]}`} alt={`GIF ${currentGIFIndex + 1}`} width={450} height={400} />
    </div>
  );
};

export default GIFDisplay;
