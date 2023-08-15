import React from "react";
import { Skeleton } from "./ui/Skeleton";

interface DocSelectionLoadingSkeletonProps {}

const DocSelectionLoadingSkeleton: React.FC<
    DocSelectionLoadingSkeletonProps
> = ({}) => {
    return (
        <li className="h-[90px] relative left-[2.5%] w-[95%] m-4 ms-0 rounded-lg border-subtext bg-bg border-[1px] ps-0">
            <div className="flex flex-row w-full h-full">
                <div className="w-2/3 h-full p-2">
                    <Skeleton className="w-full h-[30px] bg-muted/20 mb-2" />
                    <Skeleton className="w-full h-[30px] bg-muted/20" />
                </div>
                <div className="relative w-1/3 ml-auto p-2">
                    <Skeleton className="w-full h-[30px] bg-muted/20 mb-2" />
                    <Skeleton className="w-full h-[30px] bg-muted/20" />
                </div>
            </div>
        </li>
    );
};

export default DocSelectionLoadingSkeleton;
