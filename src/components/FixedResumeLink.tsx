
import React from 'react';
import { FileText } from 'lucide-react';

const FixedResumeLink = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1rep7eLTp2aTVPkIRuUxZfQpda0cBhMx8/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-4 md:right-8 z-[9999] hidden md:flex items-center space-x-2 font-bold tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <span>RESUME</span>
      <FileText size={16} />
    </a>
  );
};

export default FixedResumeLink;
