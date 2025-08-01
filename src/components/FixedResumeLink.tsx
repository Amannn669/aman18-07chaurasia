
import React from 'react';
import { FileText } from 'lucide-react';

const FixedResumeLink = () => {
  return (
    <a
      href="https://shorturl.at/DmHDH"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[99999] flex items-center space-x-2 font-bold tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <span>RESUME</span>
      <FileText size={16} />
    </a>
  );
};

export default FixedResumeLink;
