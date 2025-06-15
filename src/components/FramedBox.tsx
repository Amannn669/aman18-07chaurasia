
import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FramedBoxProps {
  title: string;
  children: React.ReactNode;
  value: string;
}

const FramedBox = ({ title, children, value }: FramedBoxProps) => {
  return (
    <AccordionItem value={value} className="border-b-0 border border-muted-foreground/20 p-6 rounded-lg relative">
      <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
      <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
      <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
      <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
      <AccordionTrigger className="p-0 text-left w-full justify-start text-2xl font-semibold hover:no-underline uppercase tracking-wider [&>svg]:hidden active:scale-95 transition-transform duration-150">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pt-4">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FramedBox;
