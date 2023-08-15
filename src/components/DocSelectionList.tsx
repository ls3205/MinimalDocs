"use client";

import { Doc, Session } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import DocSelectionCard from "./DocSelectionCard";
import { Skeleton } from "./ui/Skeleton";
import DocSelectionLoadingSkeleton from "./DocSelectionLoadingSkeleton";

interface DocSelectionListProps {
    // session: Session;
}

const DocSelectionList: React.FC<DocSelectionListProps> = ({}) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["GetDocs"],
        queryFn: async () => {
            const { data } = await axios.get("/api/doc/get");
            return data as Doc[];
        },
    });

    if (isLoading) {
        return (
            <ul className="w-full h-full overflow-hidden">
                <DocSelectionLoadingSkeleton />
                <DocSelectionLoadingSkeleton />
                <DocSelectionLoadingSkeleton />
                <DocSelectionLoadingSkeleton />
                <DocSelectionLoadingSkeleton />
                <DocSelectionLoadingSkeleton />
            </ul>
        );
    }

    if (error) {
        return <div>something aint right</div>;
    }

    return (
        <ul className="w-full h-full overflow-y-scroll">
            {data?.map((doc) => {
                return <DocSelectionCard key={doc.id} doc={doc} />;
            })}
        </ul>
    );
};

export default DocSelectionList;
