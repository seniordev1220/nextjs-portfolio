import React, { useState, useEffect } from 'react'
import Header from './header/header'
import classes from "./layout.module.scss"

export const DarKModeContext = React.createContext({ isDarkMode: false });
function Layout({ children }: LayoutPropType) {

    const [isDarkMode, setIsDarkMode] = useState("true");
    useEffect(() => {
        const isDark: string = window?.sessionStorage?.getItem("isDarkMode") as any;
        if(isDark==="false"){
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
                <Header className={
                    isDarkMode === "false" ?
                        classes['navTheme--light'] :
                        classes['navTheme--dark']}
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
        </DarKModeContext.Provider>
    )
}

interface LayoutPropType {
    children: JSX.Element
}

export default Layout;
