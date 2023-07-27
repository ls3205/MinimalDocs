import React, { useState, useEffect, useContext, useRef } from "react"

const Popup = ({id}) => {

}

const PopupTrigger = () => {

}

const PopupRemoteTrigger = ({id, bypassButton, children}) => {
    const clickTrigger = () => {
        const trigger = document.getElementById(id);
        trigger.click();
    }
    
    return (
        !bypassButton ? (
            <button onClick={clickTrigger}>
                {
                    children
                }
            </button>
        ) : (
            <div className="w-full h-full" onClick={clickTrigger}>
                { children }
            </div>
        )
    )
}