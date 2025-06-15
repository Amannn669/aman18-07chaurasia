
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
    <AccordionItem value={value} className="group border-b-0 border border-muted-foreground/20 p-6 rounded-lg relative transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10">
      <div className="absolute -top-px -left-px w-0 h-0 opacity-0 border-t-2 border-l-2 border-primary rounded-tl-lg transition-all duration-300 group-data-[state=open]:w-8 group-data-[state=open]:h-8 group-data-[state=open]:opacity-100"></div>
      <div className="absolute -top-px -right-px w-0 h-0 opacity-0 border-t-2 border-r-2 border-primary rounded-tr-lg transition-all duration-300 group-data-[state=open]:w-8 group-data-[state=open]:h-8 group-data-[state=open]:opacity-100"></div>
      <div className="absolute -bottom-px -left-px w-0 h-0 opacity-0 border-b-2 border-l-2 border-primary rounded-bl-lg transition-all duration-300 group-data-[state=open]:w-8 group-data-[state=open]:h-8 group-data-[state=open]:opacity-100"></div>
      <div className="absolute -bottom-px -right-px w-0 h-0 opacity-0 border-b-2 border-r-2 border-primary rounded-br-lg transition-all duration-300 group-data-[state=open]:w-8 group-data-[state=open]:h-8 group-data-[state=open]:opacity-100"></div>
      <AccordionTrigger className="p-0 text-left w-full justify-start text-2xl font-semibold hover:no-underline uppercase tracking-wider [&>svg]:hidden active:scale-95 transition-transform duration-150 transition-colors data-[state=open]:text-primary">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pt-4">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FramedBox;
