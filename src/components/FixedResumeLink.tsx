
import React from 'react';
import { FileText } from 'lucide-react';

const FixedResumeLink = () => {
  return (
    <a
      href="https://bento.me/aman18"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-4 md:right-8 z-50 hidden md:flex items-center space-x-2 font-bold tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <span>RESUME</span>
      <FileText size={16} />
    </a>
  );
};

export default FixedResumeLink;
