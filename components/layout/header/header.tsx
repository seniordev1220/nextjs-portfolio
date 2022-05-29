import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { Box, Grid, Tab, Tabs } from '@mui/material'
import Link from 'next/link'
import { joinClass } from '../../../helpers/utils';
import { Logo } from '../../Logo'
import { RotaryMenu } from './menu';
import { HeaderProps } from './headerPropsType'
import classes from './header.module.scss'
import { DarKModeContext } from '../layout';



import { Award } from "../../icons/award";
import { Email } from "../../icons/email";
import { Home } from "../../icons/home ";
import { Menu } from "../../icons/menu";
import { Phone } from "../../icons/phone";
import { Blog } from "../../icons/blog";
import { Education } from "../../icons/education";

const iconSize = "2rem"

const routes = [
    {
        name: "Home",
        href: "/",
        IconComponent: <Home height={iconSize} width={iconSize} />

    },
    {
        name: "Projects",
        href: "/projects",
        IconComponent: <Award height={iconSize} width={iconSize} />

    },
    {
        name: "Skills",
        href: "/skills",
        IconComponent: <Education height={iconSize} width={iconSize} />

    },
    {
        name: "My Blogs",
        href: "/blogs",
        IconComponent: <Blog height={iconSize} width={iconSize} />

    },
    {
        name: "About",
        href: "/about",
        IconComponent: <Education height={iconSize} width={iconSize} />

    },
    {
        name: "Contact",
        href: "/contact",
        IconComponent: <Phone height={iconSize} width={iconSize} />

    }
]
function Header({ onDarkModeToggle }: HeaderProps) {
    const { isDarkMode } = useContext(DarKModeContext)
    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState("home");


    useEffect(() => {
        if (router.pathname === "/") {
            setCurrentRoute("home")
        } else {
            setCurrentRoute(router.pathname.split('/')[1])
        }
    }, [router.pathname])
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (<>
        <header >
            <Box sx={{ position: "fixed", top: 0, left: 0, }}>
                <Logo />
            </Box>
            <div className={classes.ham__wrapper}  >
                <RotaryMenu />
            </div>
            <Box sx={{
                position: "fixed", top: "0rem",
                right: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}  className={classes.desktop__menu}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "71vh",
                    boxShadow: "0 0 0.5rem #00000049",
                    backgroundColor: "#ffffff04",
                    borderRadius: "5rem",
                    paddingTop: "2rem",
                    paddingBottom: "2rem"
                }}>

                    <Box>
                        <input checked={isDarkMode} className={classes.toggle} type="checkbox" onChange={onDarkModeToggle} />
                    </Box>
                    <Box>
                        <nav>
                            <Tabs orientation='vertical'
                                value={value}
                                onChange={handleChange}>
                                {routes.map((route) => (
                                    <Tab sx={{ minWidth: "1rem" }} label={route.IconComponent} />
                                ))}
                            </Tabs>
                        </nav>
                    </Box>

                </Box>
            </Box>
        </header>
    </>
    )
}
export default Header
