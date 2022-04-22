import React, { createContext } from "react";

import { useState } from "react";

export const ToggleContext =createContext()

export const ToggleProvider=({children})=>
{
    const [theme,setTheme]=useState("true");

    const toggleTheme=()=>
    {
        setTheme(theme==="white"?"yellow":"white");
    }
    return (
    <ToggleContext.Provider value={[theme,toggleTheme]}>
        {children}
    </ToggleContext.Provider>
    )
}