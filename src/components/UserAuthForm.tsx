'use client'

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import GoogleSVG from "./GoogleSVG";
import { signIn } from 'next-auth/react'
import { useToast } from "./ui/use-toast";
import Spinner from "./Spinner";
import DiscordSVG from "./DiscordSVG";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false)
    const [isLoadingDiscord, setIsLoadingDiscord] = useState<boolean>(false)
    const { toast } = useToast()

    const loginWithGoogle = async () => {
        setIsLoadingGoogle(true)

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
            setIsLoadingGoogle(false)
        }
    }

    const loginWithDiscord = async () => {
        setIsLoadingDiscord(true)

        try {
            await signIn('discord')
        } catch (err) {
            toast({
                title: 'An Error Occurred!',
                description: 'Sign In Failed',
                variant: 'destructive',
                duration: 2000
            })
        } finally {
            setIsLoadingDiscord(false)
        }
    }

    return (
        <div className={cn("flex flex-col justify-center", className)} {...props}>
            <button className="flex flex-row w-auto h-full m-4 p-3 justify-center bg-black rounded-md hover:rounded-xl transition-all duration-300" onClick={loginWithGoogle}>
                {isLoadingGoogle ? <Spinner width="w-6" height="h-6" /> : <GoogleSVG />}
                <p className="text-white ml-4">Google (DO NOT USE, BROKEN)</p>
            </button>
            <button className="flex flex-row w-auto h-full m-4 p-3 justify-center bg-[#5865F2] rounded-md hover:rounded-xl transition-all duration-300" onClick={loginWithDiscord}>
                {isLoadingDiscord ? <Spinner width="w-6" height="h-6" /> : <DiscordSVG />}
                <p className="text-white ml-4">Discord</p>
            </button>
        </div>
    );
};

export default UserAuthForm;
