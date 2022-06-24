import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { ScrollDown } from '../scrolldown';
import Header from './header/header'
import classes from "./layout.module.scss"

export const DarKModeContext = React.createContext({ isDarkMode: false });
function Layout({ children}: LayoutPropType) {

    const [isDarkMode, setIsDarkMode] = useState("true");
    useEffect(() => {
        const isDark: string = window?.sessionStorage?.getItem("isDarkMode") as any;
        if (isDark === "false") {
            setIsDarkMode(isDark);
        }

        isDark === "false" && document.body.classList.add("light-mode");
    }, [])

    const onButtonToggle = () => {
        window.sessionStorage.setItem("isDarkMode", isDarkMode === "false" ? "true" : "false")
        setIsDarkMode(isDarkMode => isDarkMode === "false" ? "true" : "false");
        document.body.classList.toggle("light-mode")
    }

    return (
        <DarKModeContext.Provider value={{ isDarkMode: isDarkMode === "true" ? true : false }} >
            <div>
                <main className={classes.main}>
                    {children}
                </main>
                <Header onDarkModeToggle={onButtonToggle}/>
                <ScrollDown/>
            </div>
        </DarKModeContext.Provider>
    )
}

interface LayoutPropType {
    children: JSX.Element;
}

export default Layout;
