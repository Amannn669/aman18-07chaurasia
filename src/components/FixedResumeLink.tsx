
import React from 'react';
import { Download } from 'lucide-react';

const FixedResumeLink = () => {
  return (
    <a
      href="#experience"
      className="fixed bottom-10 right-4 md:right-8 z-50 hidden md:flex items-center space-x-2 font-bold tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <span>RESUME</span>
      <Download size={16} />
    </a>
  );
};

export default FixedResumeLink;
