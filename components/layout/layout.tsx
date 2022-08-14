import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { ScrollDown } from '../scrolldown';
import Header from './header/header';
import classes from "./layout.module.scss";

const iconStyle = {
    color: "#2753d7",
    fontSize: "3rem",
    padding: "0.5rem",
}
export const DarKModeContext = React.createContext({ isDarkMode: false });
function Layout({ children, variant, title }: LayoutPropType) {

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
        <>
            {variant === "main" && (
                <DarKModeContext.Provider value={{ isDarkMode: isDarkMode === "true" ? true : false }} >
                    <div>
                        <main className={classes.main}>
                            {children}
                        </main>
                        <Header onDarkModeToggle={onButtonToggle} />
                        <ScrollDown />
                    </div>
                </DarKModeContext.Provider>)
            }
            {
                variant === "sub" && (
                    <DarKModeContext.Provider value={{ isDarkMode: isDarkMode === "true" ? true : false }} >
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.3rem",
                            marginBottom:"1.5rem"
                        }}>
                            <Box sx={{ display: "flex" }}>
                                {
                                    title === "Blogs" && <RssFeedIcon sx={iconStyle} />
                                }
                                {
                                    title === "Projects" && <RssFeedIcon sx={iconStyle} />
                                }
                                <Typography sx={{ fontSize: "xx-large", fontWeight: "600" }} className={classes.sub_layout_title} >{title}</Typography>
                            </Box>
                            <input checked={isDarkMode === "true" ? true : false}
                                className={classes.toggle}
                                type="checkbox"
                                onChange={onButtonToggle} />
                        </Box>
                        <div>
                            <main className={classes.main}>
                                {children}
                            </main>
                        </div>
                    </DarKModeContext.Provider>
                )
            }
        </>)
}

interface LayoutPropType {
    children: JSX.Element;
    variant: "main" | "sub";
    title?: "Blogs" | "Projects"
}

export default Layout;
