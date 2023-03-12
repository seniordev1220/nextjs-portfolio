import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router';
import { Box, Tab, Tabs, Tooltip as MuiToolTip, TooltipProps, tooltipClasses, Zoom } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { styled } from '@mui/material/styles';
import { Logo } from '../../Logo'
import { RotaryMenu } from './menu';
import { HeaderProps } from './headerPropsType'
import { DarKModeContext } from '../layout';
import { TabContext } from '../../../pages';
import classes from './header.module.scss'

const iconColor = "#2753d7"
function Header({ onDarkModeToggle }: HeaderProps) {
    const { isDarkMode } = useContext(DarKModeContext)
    const { tabValue, handleTabChange } = useContext(TabContext)
    const routes = useMemo(() => {
        const iconStyle = { color: iconColor, fontSize: "2rem", stroke: isDarkMode ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)", }
        return ([
            {
                name: "Home",
                href: "/",
                IconComponent: <HomeIcon sx={iconStyle} />

            },
            {
                name: "Portfolio",
                href: "/projects",
                IconComponent: <BusinessCenterIcon sx={iconStyle} />

            },
            {
                name: "Skills",
                href: "/skills",
                IconComponent: <PsychologyIcon sx={iconStyle} />

            },
            {
                name: "About",
                href: "/about",
                IconComponent: <PersonIcon sx={iconStyle} />


            },
            {
                name: "Contact",
                href: "/contact",
                IconComponent: <ContactPhoneIcon sx={iconStyle} />

            }
        ])
    }, [isDarkMode])

    const router = useRouter();

    const Tooltip = styled(({ className, ...props }: TooltipProps) => (
        <MuiToolTip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#2753d7af",
            color: 'white',
            boxShadow: "0rem 0 1rem #00000049",
            width: "6rem",
            height: "2.2rem",
            borderTopLeftRadius: "1.5rem",
            borderBottomLeftRadius: "1.5rem",
            fontWeight: "800",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
            marginRight: "-3rem",
            position: "relative",
            right: "-1rem"

        },
    }));


    return (<>
        <header >
            <Box sx={{ position: "fixed", top: "0.5rem", left: "0.5rem", }}>
                <Logo />
            </Box>
            <Box className={classes.toggle__desktop}>
                <input checked={isDarkMode}
                    className={classes.toggle}
                    type="checkbox"
                    onChange={onDarkModeToggle} />
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
            }} className={classes.desktop__menu}>
                <Box sx={{
                    ...isDarkMode && {
                        border: 'solid 1px #2f2f2fc4',
                        boxShadow: '0 0 1rem #00000078'
                    },
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
                                // value={tabValue}
                                onChange={handleTabChange}
                                TabIndicatorProps={{ style: { border: `solid 0.1px ${isDarkMode ? "black" : "white"}`, width: "4px" } }}
                            >
                                {routes.map((route) => (
                                    <Tooltip
                                        key={`tab-${route.name}`} title={route.name} placement="left" TransitionComponent={Zoom}>
                                        <Tab
                                            sx={{ minWidth: "1rem" }} label={route.IconComponent} />
                                    </Tooltip>
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
