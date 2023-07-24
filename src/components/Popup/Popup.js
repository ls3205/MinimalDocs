import React from "react";

function Popup({ children, trigger, inputRef, width, height }) {
    return ( trigger &&
        <div className="absolute bg-[#000] bg-opacity-50 w-full h-full">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[50%] ${width && ('w-' + width)} max-h-[80%] ${height && ('h-' + height)} sm:w-[90%] sm:max-w-full rounded-xl p-2 animate-[slide-down_0.3s_both_ease-in-out] origin-bottom-left bg-menu border-2 border-text`} ref={inputRef}>
                {children}
            </div>
        </div>
    );
}

export default Popup;
