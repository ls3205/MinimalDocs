import React from "react";
import "@/styles/spinner.css";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    width: string
    height: string
}

const Spinner: React.FC<SpinnerProps> = ({width, height, ...props}) => {
    return (
        <div className={cn("grid justify-center items-center", width, height)}>
            <div className="w-6 h-6 border-[2px] border-[#f3f3f3] border-t-gray-900 rounded-full animate-[spinner_1.5s_linear_infinite]"></div>
        </div>
    );
}

export default Spinner