import SignUp from "@/components/SignUp";
import UserAuthForm from "@/components/UserAuthForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page: React.FC = ({}) => {
    return (
        <div className="absolute inset-0 bg-bg">
            <div className="absolute h-1/2 aspect-square inset-y-1/4 left-1/2 -translate-x-1/2 bg-menu border-subtext border-[1px] rounded-xl">
                <Link href='/' className="flex flex-row p-3 link"><ChevronLeft />Home</Link>
                <SignUp />

                <UserAuthForm />

                <p className="px-8 text-center text-text text-sm">
                    Already a MinimalDocs User? { '' }
                    <Link href='/sign-in' className="link">Sign In</Link>
                </p>
            </div>
        </div>
    )
};

export default page;
