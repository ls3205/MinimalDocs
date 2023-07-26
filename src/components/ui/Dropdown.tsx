import React, { useState, useEffect, createContext, useContext, useRef } from "react"

const ExpandedContext = createContext({expanded: undefined, setExpanded: undefined});
const ButtonRefContext = createContext(undefined);
const DropdownRefContext = createContext(undefined);

const useExpanded = () => {
    return useContext(ExpandedContext)
}

const Dropdown = ({children, ...props}) => {
    const [expanded, setExpanded] = useState(false);
    const expandedContextValue = {expanded, setExpanded}
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                    setExpanded(false)
                }
            }
        }

        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [])

    return (
        <ExpandedContext.Provider value={expandedContextValue}>
            <ButtonRefContext.Provider value={buttonRef}>
                <DropdownRefContext.Provider value={dropdownRef}>
                    <div {...props}>
                        {
                            children
                        }
                    </div>
                </DropdownRefContext.Provider>
            </ButtonRefContext.Provider>
        </ExpandedContext.Provider>
    )
}

const DropdownTrigger = ({children, ...props}) => {
    const {expanded, setExpanded} = useContext(ExpandedContext);
    const buttonRef = useContext(ButtonRefContext);

    return (
        <button className="" onClick={() => setExpanded(!expanded)} ref={buttonRef} {...props}>
            {
                children
            }
        </button>
    )
}

const DropdownItems = ({children, className, anchor, ...props}) => {
    const {expanded, setExpanded} = useExpanded();
    const dropdownRef = useContext(DropdownRefContext)

    return (
        expanded ? (
            <div className={[`absolute transition-all  ${className}`, (anchor === 'bm') && 'left-1/2 -translate-x-1/2 origin-top-left'].filter(Boolean).join(' ')} ref={dropdownRef} {...props}>
                {
                    children
                }
            </div>
        ) : ''
    )
}

const DropdownItem = ({children, className, ...props}) => {
    return (
        <div className={`flex flex-row ${className}`} {...props}>
            {
                children
            }
        </div>
    )
}

const DropdownDivider = ({className, ...props}) => {
    return (
        <div className={`h-[2px] rounded-full bg-black ${className}`} {...props} />
    )
}

const DropdownItemIcon = ({icon}) => {
    return (
        <span className="material-icons-outlined mr-1 text-[20px] relative top-[5px]">
            {
                icon
            }
        </span>
    )
}

export {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownDivider,
    DropdownItemIcon
}