import { Doc } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface DocSelectionCardProps {
    doc: Doc;
    key: string;
}

const DocSelectionCard: React.FC<DocSelectionCardProps> = ({ doc, key, ...props }) => {
    const fixDate = (date: string) => {
        date.replace(/[-]/g, '/')
        const newDate = new Date(Date.parse(date))
        return newDate.toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})
    }

    return (
        <li key={key} className="relative left-[2.5%] w-[95%] h-fit m-4 ms-0 rounded-lg border-subtext bg-bg border-[1px]">
            <Link
                href={`/edit/${doc.id}`}
                className="w-full h-full flex flex-row"
            >
                <div className="w-max h-full p-2">
                    <h1 className="text-2xl mb-2">
                        { doc.title.slice(0, 30) }
                    </h1>
                    <p className="">
                        { `${doc.content.slice(0, 30)}...` }
                    </p>
                </div>
                <div className="relative w-auto ml-auto p-2">
                    <p className="mb-2">
                        {`Created: ${fixDate(doc.created.toLocaleString())}`}
                    </p>
                    <p className="">
                        {`Last Modified: ${fixDate(doc.lastUpdated.toLocaleString())}`}
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default DocSelectionCard;
