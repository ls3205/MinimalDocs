import React from "react";

function Dropdown({ trigger, children, anchor, inputRef }) {
    return (
        trigger && (
            <div
                className={["absolute bg-menu border-[1px] rounded-lg w-auto h-auto animate-[slide-down_0.3s_both_ease-in-out]",
                            (anchor === 'bm') && 'left-1/2 -translate-x-1/2 origin-top-left',
                            (anchor === 'bottom-mobile' && 'w-[90%] left-[5%] bottom-[150%] h-auto origin-bottom')]
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
