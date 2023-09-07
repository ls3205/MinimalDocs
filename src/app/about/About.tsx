"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return <div className="absolute w-1/2 h-3/4 top-[12.5%] left-1/2 -translate-x-1/2 sm:w-full sm:h-full sm:top-0">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-subtext">
                    What is MinimalDocs?
                </AccordionTrigger>
                <AccordionContent className="text-text">
                    
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>;
};

export default About;
