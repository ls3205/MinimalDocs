import React, { useEffect, useRef } from "react";

function Popup({ children, trigger, setTrigger, buttonRef, width, height }) {
    const popupRef = useRef(null)

    // useEffect(() => {
    //     const handler = (e) => {
    //         console.log(popupRef)
    //         console.log(buttonRef)
    //         if (popupRef.current && !popupRef.current.contains(e.target)) {
    //             buttonRef.current.forEach(target => {
    //                 if (!target.contains(e.target)) {
    //                     setTrigger(false)
    //                 }
    //             });
    //         }
    //     }

    //     window.addEventListener("click", handler)
    //     return () => window.removeEventListener("click", handler)
    // }, [buttonRef, setTrigger])

    return ( trigger &&
        <div className="absolute bg-[#000] bg-opacity-50 w-full h-full animate-[fade-in_0.3s_both_ease-in-out] origin-center">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[50%] ${width && ('w-' + width)} max-h-[80%] ${height && ('h-' + height)} sm:w-[90%] sm:max-w-full rounded-xl p-2 animate-[slide-down_0.3s_both_ease-in-out] origin-bottom-left bg-menu border-2 border-text`} ref={popupRef}>
                {children}
            </div>
        </div>
    );
}

export default Popup;
