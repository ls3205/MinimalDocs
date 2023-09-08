"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return <div className="absolute w-1/2 h-3/4 top-[22.5%] left-1/2 -translate-x-1/2 sm:w-[90%] sm:h-[90%] sm:top-[10%]">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-subtext">
                    What is MinimalDocs?
                </AccordionTrigger>
                <AccordionContent className="text-text">
                    MinimalDocs is a minimalistic, lightweight text editor (somewhat like Google Docs or Blankslate.io).
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-subtext">
                    Why MinimalDocs?
                </AccordionTrigger>
                <AccordionContent className="text-text">
                    MinimalDocs was built out of a need for something like Blankslate.io, a lightweight, online place where I could store small notes for myself. I didn't like the bright theme of blankslate and was looking for something with a darker theme when I decided just to make it myself.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-subtext">
                    What Technologies Does MinimalDocs Use?
                </AccordionTrigger>
                <AccordionContent className="text-text">
                    MinimalDocs uses Next.js for the frontend framework, Next.js API routes for the backend API, NextAuth for authentication, Prisma as an ORM, a PlanetScale MySQL database for storing accounts and Docs, and is hosted on Vercel.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>;
};

export default About;
