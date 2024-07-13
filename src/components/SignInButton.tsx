"use client";

import Link from "next/link";
import React, { useState } from "react";
import Spinner from "./Spinner";

interface SignInButtonProps {}

const SignInButton: React.FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    return (
        <button className="absolute bottom-[7.5%] left-[8%] h-[40px] w-[80px] justify-center rounded-lg bg-subtext align-middle text-bg transition-all duration-300 hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight active:transition-none sm:hidden">
            <Link
                className="flex h-[40px] w-[80px] flex-row items-center justify-center align-middle"
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
