import { getDocData } from "@/scripts/getDocData";
import React from "react";
import { DropdownMenuSeparator } from "./ui/DropdownMenu";

interface WordCountContentProps {}

const WordCountContent: React.FC<WordCountContentProps> = ({}) => {
    const {
        wordCount,
        selectionWordCount,
        characterCount,
        selectionCharacterCount,
        charactersExclSpaceCount,
        selectionCharactersExclSpaceCount,
    } = getDocData();

    return (
        <ul>
            <DropdownMenuSeparator className="dropdown-separator my-5" />
            {selectionWordCount !== 0 ||
            selectionCharacterCount !== 0 ||
            selectionCharactersExclSpaceCount !== 0 ? (
                <>
                    <li className="flex flex-row">
                        <h3 className="">Words</h3>
                        <p className="absolute right-6">
                            {selectionWordCount} of {wordCount}
                        </p>
                    </li>
                    <DropdownMenuSeparator className="dropdown-separator my-5" />
                    <li className="flex flex-row">
                        <h3 className="">Characters</h3>
                        <p className="absolute right-6">
                            {selectionCharacterCount} of {characterCount}
                        </p>
                    </li>
                    <DropdownMenuSeparator className="dropdown-separator my-5" />
                    <li className="flex flex-row">
                        <h3 className="">Characters Excl. Spaces</h3>
                        <p className="absolute right-6">
                            {selectionCharactersExclSpaceCount} of {charactersExclSpaceCount}
                        </p>
                    </li>
                </>
            ) : (
                <>
                    <li className="flex flex-row">
                        <h3 className="">Words</h3>
                        <p className="absolute right-6">{wordCount}</p>
                    </li>
                    <DropdownMenuSeparator className="dropdown-separator my-5" />
                    <li className="flex flex-row">
                        <h3 className="">Characters</h3>
                        <p className="absolute right-6">{characterCount}</p>
                    </li>
                    <DropdownMenuSeparator className="dropdown-separator my-5" />
                    <li className="flex flex-row">
                        <h3 className="">Characters Excl. Spaces</h3>
                        <p className="absolute right-6">{charactersExclSpaceCount}</p>
                    </li>
                </>
            )}
        </ul>
    );
};

export default WordCountContent;
