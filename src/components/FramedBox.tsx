
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FramedBoxProps {
  title: string;
  children: React.ReactNode;
}

const FramedBox = ({ title, children }: FramedBoxProps) => {
  return (
    <div className="border border-muted-foreground/20 p-6 rounded-lg relative">
      <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
      <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
      <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
      <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={title} className="border-b-0">
          <AccordionTrigger className="text-2xl font-semibold hover:no-underline uppercase tracking-wider [&>svg]:hidden">{title}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FramedBox;
