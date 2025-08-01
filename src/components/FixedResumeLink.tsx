
import React from 'react';
import { FileText } from 'lucide-react';

const FixedResumeLink = () => {
  return (
    <a
      href="https://shorturl.at/DmHDH"
      target="_blank"
      rel="noopener noreferrer"
      className="sticky bottom-10 right-4 md:right-8 z-[99999] hidden md:flex items-center space-x-2 font-bold tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors pointer-events-auto float-right"
    >
      <span>RESUME</span>
      <FileText size={16} />
    </a>
  );
};

export default FixedResumeLink;
