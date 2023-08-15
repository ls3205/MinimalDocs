"use client";

import { Doc } from "@prisma/client";
import { ChevronLeft, FolderOpenIcon, TrashIcon } from "lucide-react";
import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/AlertDialog";
import { useTheme } from "./context";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import Spinner from "./Spinner";

interface DocCardActionsProps {
    doc: Doc;
}

const DocCardActions: React.FC<DocCardActionsProps> = ({ doc }) => {
    const { theme } = useTheme();
    const router = useRouter();

    const { toast } = useToast()

    const { mutate: deleteDoc, isLoading } = useMutation({
        mutationFn: async () => {
            const { data } = await axios.delete(
                `/api/doc/delete?id=${doc.id}`
            );
            return data;
        },
        onSuccess: () => {
            toast({
                title: "Deleted Doc",
                description: `Successfully deleted doc: ID ${doc.id}, redirecting shortly.`,
                variant: "default",
                duration: 2000,
                className: "bg-green-500 border-text",
            })
            return router.refresh();
        },
        onError: (err) => {
            return toast({
                title: "An Error Occurred",
                description: "Unable to delete doc, please try again!",
                variant: "destructive",
                duration: 2000
            })
        }
    });

    return (
        <div className="flex flex-row w-[130px] sm:w-[80px] sm:flex-col sm:justify-center sm:align-middle mb-2">
            <Link
                className="editor-button sm:!block sm:m-2"
                href={`/docs/edit/${doc.id}`}
            >
                <FolderOpenIcon className="w-full" />
            </Link>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <TrashIcon className="editor-button sm:!block sm:m-2" />
                </AlertDialogTrigger>
                <AlertDialogContent className={`theme-${theme}`}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-subtext">
                            Are you sure you want to delete this doc?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-text">
                            This causes the loss of data and it cannot be
                            undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            <ChevronLeft className="mr-2" />
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500 text-white sm:mb-2" onClick={(e) => {e.preventDefault(); deleteDoc()}}>
                            {isLoading ? <Spinner width="w-auto" height="h-full" /> : <TrashIcon className="mr-2" />}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DocCardActions;
