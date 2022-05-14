import React, { useState, useEffect } from 'react'
import Header from './header/header'
import classes from "./layout.module.scss"

function Layout({ children }: LayoutPropType) {

    const [isDarkMode, setIsDarkMode] = useState("false");
    useEffect(() => {
        const isDark: string = window?.sessionStorage?.getItem("isDarkMode") as any;
        setIsDarkMode(isDark);
        isDark === "true" && document.body.classList.add("dark-mode");
    }, [])

    const onButtonToggle = () => {
        window.sessionStorage.setItem("isDarkMode", isDarkMode === "true" ? "false" : "true")
        setIsDarkMode(isDarkMode => isDarkMode === "true" ? "false" : "true");
        document.body.classList.toggle("dark-mode")
    }
    console.log("isdar", isDarkMode)
    return (
        <div>
            <Header className={
                isDarkMode === "true" ?
                    classes['navTheme--dark'] :
                    classes['navTheme--light']}
                onDarkModeToggle={onButtonToggle} />
            <main className={classes.main}>
                {children}
            </main>
            <div style={{
                zIndex: "-15",
                position: "absolute",
            }}>
                {/* <Background /> */}
            </div>
        </div>
    )
}

interface LayoutPropType {
    children: JSX.Element
}

export default Layout;
