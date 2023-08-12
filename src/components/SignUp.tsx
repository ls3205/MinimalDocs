import React from "react";
import SignInSVG from "./SignInSVG";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
    return <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
    <div className="flex flex-col space-y-2 text-center">
        <SignInSVG />
        <h1 className="text-2xl text-text font-semibold tracking-tight">Welcome To MinimalDocs!</h1>
    </div>
</div>;
};

export default SignUp;
