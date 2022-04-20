import React, { createContext } from "react";

import { useState } from "react";

export const ThemeContext =createContext()

export const ThemeProvider=({children})=>
{
    const [theme,setTheme]=useState("true");

    const toggleTheme=()=>
    {
        setTheme(theme==="white"?"gray":"white");
    }
    return (
    <ThemeContext.Provider value={[theme,toggleTheme]}>
        {children}
    </ThemeContext.Provider>
    )
}