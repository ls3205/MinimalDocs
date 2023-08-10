'use client'

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import GoogleSVG from "./GoogleSVG";
import { signIn } from 'next-auth/react'
import { useToast } from "./ui/use-toast";
import Spinner from "./Spinner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { toast } = useToast()

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (err) {
            toast({
                title: 'An Error Occurred!',
                description: 'Sign In Failed',
                variant: 'destructive',
                duration: 2000
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cn("flex justify-center", className)} {...props}>
            <button className="flex flex-row w-full h-full m-4 p-3 justify-center bg-black rounded-md hover:rounded-xl transition-all duration-300" onClick={loginWithGoogle}>
                {isLoading ? <Spinner width="w-6" height="h-6" /> : <GoogleSVG />}
                <p className="text-white ml-4">Google</p>
            </button>
        </div>
    );
};

export default UserAuthForm;
