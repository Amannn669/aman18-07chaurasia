import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Geometric shapes floating */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-500/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-pink-500/20 animate-float" style={{ animationDelay: '-4s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-sky-500/20 rounded-lg animate-float" style={{ animationDelay: '-1s' }} />
      <div className="absolute bottom-20 right-10 w-14 h-14 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s', animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s', animationDuration: '25s' }} />
    </div>
  );
};

export default FloatingElements;
