import React from 'react';
import Canvas from '../components/Canvas';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <Canvas />
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}