
import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface FramedBoxProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
}

const FramedBox = ({ title, children, isOpen }: FramedBoxProps) => {
  return (
    <div 
      className="border border-muted-foreground/20 p-6 rounded-lg relative h-full flex flex-col"
    >
      <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
      <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
      <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
      <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
      <Collapsible open={isOpen} className="w-full">
        <div className="text-2xl font-semibold uppercase tracking-wider">{title}</div>
        <CollapsibleContent className="text-muted-foreground pt-4">
            {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FramedBox;
