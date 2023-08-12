"use client";

import Link from "next/link";
import React, { useState } from "react";
import Spinner from "./Spinner";

interface SignInButtonProps {}

const SignInButton: React.FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    return (
        <button className="absolute w-[80px] h-[40px] align-middle justify-center left-[8%] bottom-[7.5%] bg-subtext rounded-lg text-bg hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight transition-all duration-300 active:transition-none">
            <Link
                className="w-[80px] h-[40px] align-middle justify-center"
                href="/sign-in"
                onClick={() => setIsLoading(true)}
            >
                {isLoading ? (
                    <Spinner width="w-6" height="w-6" />
                ) : (
                    <p>Sign In</p>
                )}
            </Link>
        </button>
    );
};

export default SignInButton;
