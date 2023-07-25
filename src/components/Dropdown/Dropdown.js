import React, { useRef, useEffect } from "react";

function Dropdown({ trigger, setTrigger, children, anchor, buttonRef }) {
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                    setTrigger(false)
                }
            }
        }

        window.addEventListener("click", handler)
        return () => window.removeEventListener("click", handler)
    }, [])

    return (
        trigger && (
            <div
                className={["absolute bg-menu border-[1px] rounded-lg animate-[slide-down_0.3s_both_ease-in-out]",
                            (anchor === 'bm') && 'left-1/2 -translate-x-1/2 origin-top-left',
                            (anchor === 'bottom-mobile' && 'w-[90%] left-[5%] bottom-[150%] h-auto origin-bottom')]
                    .filter(Boolean)
                    .join(" ")}
                ref={dropdownRef}
            >
                {children}
            </div>
        )
    );
}

export default Dropdown;
