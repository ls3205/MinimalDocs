import React from "react";
import GoogleSVG from "./GoogleSVG";
import SignInSVG from "./SignInSVG";

const SignIn: React.FC = ({}) => {
    return <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
            <SignInSVG />
            <h1 className="text-2xl text-text font-semibold tracking-tight">Welcome Back!</h1>
        </div>
    </div>;
};

export default SignIn;
