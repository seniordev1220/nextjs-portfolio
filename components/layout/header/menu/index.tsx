import { useState, useEffect, useContext } from "react";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import DownloadIcon from '@mui/icons-material/Download';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';
import classes from "./menu.module.scss";
import { useDarkMode } from "../../../../hooks/useDarkMode";
import { TabContext } from "../../../../pages";

const rotorSize = 81;
const xOffset = 24;
const yOffset = 20;
const rotateOffset = 180;

export const RotaryMenu = () => {
    const { handleTabChange } = useContext(TabContext)
    const { isDarkMode } = useDarkMode()
    const iconStyle = {
        color: isDarkMode ? "#fff" : "#2753d7",
        fontSize: "3rem",
        backgroundColor: isDarkMode ? "#2753d7" : "#fff",
        padding: "0.5rem",
        borderRadius: "50%",
        boxShadow: "0 0 0.5rem #2753d7",
        border:'solid 1px #0000'
    }

    const icons = [
        {
            name: "Skills",
            tabNumber: 2,
            IconComponent: <PsychologyIcon sx={iconStyle} />

        },
        {
            name: "Portfolio",
            tabNumber: 1,
            IconComponent: <BusinessCenterIcon sx={iconStyle} />

        },
        {
            name: "Download CV",
            tabNumber: 5,
            IconComponent: (<Link sx={{ color: isDarkMode ? "white" : "black", textDecoration: 'none' }}
                href="https://drive.google.com/uc?id=1y88Vas0fdeVwE9FNSx1gf6Q-myFftKdX&export=download"
                target="_blank"> <DownloadIcon sx={iconStyle} /></Link>)

        },

        {
            name: "Home",
            tabNumber: 0,
            IconComponent: <HomeIcon sx={iconStyle} />

        },
        {
            name: "About",
            tabNumber: 3,
            IconComponent: <PersonIcon sx={iconStyle} />


        },
        {
            name: "Contact",
            tabNumber: 4,
            IconComponent: <ContactPhoneIcon sx={iconStyle} />

        }
    ]
    const newI = icons.map((item, index) => {
        const angle = index * (360 / icons.length)
        const radianVal = angle * Math.PI / 180
        return {
            tabNumber: item.tabNumber,
            icon: item.IconComponent,
            IconComponent: item.IconComponent,
            xCordinate: rotorSize + rotorSize * Math.cos(radianVal),
            yCordinate: rotorSize + rotorSize * Math.sin(radianVal),

        }
    })

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [rotatebyAngle, setRotateByAngle] = useState(0);
    const [isVisible, setIsVisible] = useState(isComponentVisible);


    useEffect(() => {
        setIsVisible(isComponentVisible)
    }, [isComponentVisible])
    useEffect(() => {
        if (!isComponentVisible) {
            setRotateByAngle(0);
        }
    }, [isComponentVisible]);

    return (
        <div
            className={isVisible ? classes["mainContainer--open"] : classes["mainContainer--close"]}
            style={{

                width: "100%",
                position: "fixed",
                height: rotorSize * 2, display: "flex", justifyContent: "center"
            }}>
            <div
                style={{
                    transform: `rotate(${rotatebyAngle}deg)`,
                    transition: "transform 1s ease"
                }}
                ref={ref}
                className={isVisible ? classes['rotaryMenu--open'] :
                    classes['rotaryMenu--close']}
                onClick={() => {
                    setIsComponentVisible(true);
                    setIsVisible(true)
                }}
            >
                <div className={classes.rotoryMenu__container}>
                    <div className={classes.menuIcon} onClick={() => {
                        window.navigator.vibrate(10);
                        setRotateByAngle(rotateOffset);

                    }} >
                        <MenuIcon sx={iconStyle} />
                    </div>

                    {isVisible && <div className={classes['rotaryMenu__icons__wrapper']}>
                        {newI.map((item, index) =>
                            <div
                                onClick={() => {
                                    handleTabChange(null as any, item.tabNumber!)
                                    setIsVisible(false);
                                }}
                                key={`rotaryIcon-${item.xCordinate}-${index}`}
                                className={classes['rotaryMenu__icons']}
                                style={{
                                    position: "absolute",
                                    bottom: `${item.yCordinate - yOffset}px`,
                                    left: `${item.xCordinate - xOffset}px`,
                                    transform: `rotate(${180 - rotatebyAngle}deg)`,
                                    borderRadius: "50%",
                                    width: "3rem",
                                    transition: "width 1s transform 1s ease",
                                    height: "3rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    pointerEvents: 'all'
                                }}>
                                {item.IconComponent}
                            </div>
                        )}
                    </div>}
                </div>
            </div>
        </div>
    )
}
