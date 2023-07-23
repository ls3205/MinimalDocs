import React from "react";

function Dropdown({ trigger, children, anchor, inputRef }) {
    return (
        trigger && (
            <div
                className={["absolute bg-menu border-[1px] rounded-lg w-auto h-auto",
                            (anchor === 'bm') && 'left-1/2 -translate-x-1/2']
                    .filter(Boolean)
                    .join(" ")}
                ref={inputRef}
            >
                {children}
            </div>
        )
    );
}

export default Dropdown;
