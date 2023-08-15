"use client";

import { Doc, Session } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import DocSelectionCard from "./DocSelectionCard";
import { Skeleton } from "./ui/Skeleton";
import DocSelectionLoadingSkeleton from "./DocSelectionLoadingSkeleton";
import { Button } from "./ui/Button";
import Link from "next/link";

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
        return (
            <div className="absolute w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-middle justify-center">
                <h1 className="text-2xl text-red-500 text-center mb-2">There was an error!</h1>
                <p className="text-base text-text/50 text-center">Please try to <a href="/docs" className="text-subtext underline">refresh the page</a>!</p>
            </div>
        );
    }

    return (
        data!.length > 0 ? (
            <ul className="w-full h-full overflow-y-scroll">
                {data?.map((doc) => {
                    return <DocSelectionCard key={doc.id} doc={doc} />;
                })}
            </ul>
        ) : (
            <div className="absolute w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-middle justify-center">
                <h1 className="text-2xl text-subtext text-center mb-2">No docs found!</h1>
                <p className="text-base text-text/50 text-center">If you think this is a mistake <a href="/docs" className="text-subtext underline">refresh the page</a>!</p>
                <p className="text-sm text-text/50 text-center">---- or ----</p>
                <p className="text-base text-text/50 text-center"><Link className="text-subtext underline" href='/docs/create'>Create a new doc</Link></p>
            </div>
        )
    );
};

export default DocSelectionList;
