import React from "react";

interface DialogItemProps {
    triggerChildren?: React.ReactNode | string;
    children?: React.ReactNode;
    onSelect?: any;
    onOpenChange?: any;
}

import { Dialog, DialogTrigger, DialogContent } from "./Dialog";

import { DropdownMenuItem } from "./DropdownMenu";

const DialogItem = React.forwardRef((props: DialogItemProps, forwardedRef) => {
    const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } =
        props;
    return (
        <Dialog onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <DropdownMenuItem
                    {...itemProps}
                    className="w-full h-full"
                    // @ts-ignore
                    ref={forwardedRef}
                    onSelect={(event) => {
                        event.preventDefault();
                        onSelect && onSelect();
                    }}
                >
                    {triggerChildren}
                </DropdownMenuItem>
            </DialogTrigger>
                <DialogContent>
                    {children}
                </DialogContent>
        </Dialog>
    );
});

export default DialogItem