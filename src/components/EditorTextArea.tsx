"use client";

import { useState, useEffect } from "react";


import { useSaved } from "@minimaldocs/context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "./ui/Skeleton";

type SavedState = {
    state: "saved" | "saving" | "not saved";
};

function EditorTextArea({ id }: { id: string }) {
    const [wordCount, setWordCount] = useState<number>(0);
    // const [saved, setSaved] = useState<SavedState>({state: "saved"});
    const { saved, setSaved } = useSaved();
    // const {settings, setSettings} = useSettings();
    // var primaryTimer: ReturnType<typeof setTimeout>;
    // var secondaryTimer: ReturnType<typeof setTimeout>;

    const { mutate: loadDoc, isLoading } = useMutation({
        mutationFn: async () => {
            const { data } = await axios.get(`/api/doc/get?id=${id}`)
            return data;
        },
        onSuccess: (data) => {
            const titlefield: HTMLTextAreaElement = document.getElementById(
                "titlefield"
            ) as HTMLTextAreaElement;
            const textfield: HTMLTextAreaElement = document.getElementById(
                "textfield"
            ) as HTMLTextAreaElement;

            titlefield.value = data.title;
            textfield.value = data.content;
        },
    });

    useEffect(() => {
        loadDoc();
    }, []);

    useEffect(() => {
        const textfield: HTMLTextAreaElement = document.getElementById(
            "textfield"
        ) as HTMLTextAreaElement;
        const countWords = (): void => {
            let res = [];
            let str = textfield.value
                .replace(/[\t\n\r\.\?\!]/gm, " ")
                .split(" ");
            str.map((s) => {
                let trimStr = s.trim();
                if (trimStr.length > 0) {
                    res.push(trimStr);
                }
            });
            setWordCount(res.length);

            const wordCounter: HTMLSpanElement =
                document.getElementById("word-count-span")!;
            wordCounter.innerHTML = res.length as unknown as string;
        };
        textfield.addEventListener("input", countWords);
        return () => textfield.removeEventListener("input", countWords);
    }, []);

    useEffect(() => {
        const handler = () => {
            setSaved({ state: "not saved" });
        };

        const titlefield: HTMLTextAreaElement = document.getElementById(
            "titlefield"
        ) as HTMLTextAreaElement;
        const textfield: HTMLTextAreaElement = document.getElementById(
            "textfield"
        ) as HTMLTextAreaElement;
        titlefield.addEventListener("input", handler);
        textfield.addEventListener("input", handler);
        return () => {
            titlefield.removeEventListener("input", handler);
            textfield.removeEventListener("input", handler);
        };
    }, []);

    useEffect(() => {
        const textfield: HTMLTextAreaElement = document.getElementById(
            "textfield"
        ) as HTMLTextAreaElement;

        const handleIndent = (e: KeyboardEvent): void => {
            if (e.key === "Tab") {
                e.stopPropagation();
                e.preventDefault();

                textfield!.setRangeText(
                    "\t",
                    textfield!.selectionStart,
                    textfield!.selectionEnd,
                    "end"
                );
            }
        };

        textfield.addEventListener("keydown", handleIndent);

        return () => textfield.removeEventListener("keydown", handleIndent);
    }, []);

    return (
        <div
            className={`flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 w-1/2 border-[0.25px] border-none rounded-md transition-all duration-300  sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:border-none sm:w-full sm:h-[92dvh] sm:shadow-none sm:hover:shadow-none`}
        >
            <ul className="flex flex-col w-full h-full">
                <li className="w-full h-[50px] mb-[1%]">       
                    <textarea
                        className={[
                            `relative transition-all duration-300 outline-none border-b-[2px]  w-[95%] h-full top-[2.5%] left-[2.5%] align-middle text-[30px] resize-none bg-bg text-text caret-highlight placeholder-subtext selection:bg-highlight`,
                            saved.state === "saved" && "border-subtext",
                            saved.state === "saving" && "border-highlight",
                            saved.state === "not saved" && "border-red-600"
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        id="titlefield"
                        placeholder={isLoading ? '' :  `  enter title...`}
                    />
                    {isLoading && (
                        <Skeleton className="relative -top-full z-50 w-[95%] h-full bg-muted/20" />
                    )}
                </li>
                <li className="w-full h-full">
                    <textarea
                        className={[
                            `relative transition-all duration-300 border-b-[2px] outline-none w-[95%] h-full left-[2.5%] text-[20px] resize-none pr-[2.5%] bg-bg text-text caret-highlight placeholder-subtext sm:border-none selection:bg-highlight`,
                            saved.state === "saved" && "border-subtext",
                            saved.state === "saving" && "border-highlight",
                            saved.state === "not saved" && "border-red-600"
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        id="textfield"
                        placeholder={isLoading ? '' :  `  enter title...`}
                    />
                    {isLoading && (
                        <Skeleton className="relative -top-full z-50 w-[95%] h-full bg-muted/20" />
                    )}
                </li>
            </ul>
        </div>
    );
}

export default EditorTextArea;
