import { useState, useEffect } from "react";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';
import classes from "./menu.module.scss";
import { useDarkMode } from "../../../../hooks/useDarkMode";

const rotorSize = 81;
const xOffset = 28;
const yOffset = 20;
const rotateOffset = 180;

export const RotaryMenu = () => {
    const {isDarkMode}= useDarkMode()
    const iconStyle = {
        color: "#2753d7",
        fontSize: "3rem",
        backgroundColor:isDarkMode?"rgba(8, 8, 8, 1)":"#fff",
        padding:"0.5rem",
        borderRadius:"50%",
        boxShadow:isDarkMode?"0 0 0.3rem #696969":"0 0 0.3rem rgba(8, 8, 8, 1)"
    }
   
    const icons = [
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
            name: "My Blogs",
            href: "/blogs",
            IconComponent: <RssFeedIcon sx={iconStyle} />
    
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
    ]
    const newI = icons.map((item, index) => {
        const angle = index * (360 / icons.length)
        const radianVal = angle * Math.PI / 180
        return {
            icon: item.IconComponent,
            IconComponent: item.IconComponent,
            xCordinate: rotorSize + rotorSize * Math.cos(radianVal),
            yCordinate: rotorSize + rotorSize * Math.sin(radianVal),
    
        }
    })
    




    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [rotatebyAngle, setRotateByAngle] = useState(0);

    useEffect(() => {
        if (!isComponentVisible) {
            setRotateByAngle(0);
        }
    }, [isComponentVisible]);

    return (
        <div
            className={isComponentVisible ? classes["mainContainer--open"] : classes["mainContainer--close"]}
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
                className={isComponentVisible ? classes['rotaryMenu--open'] :
                    classes['rotaryMenu--close']}
                onClick={() => {
                    setIsComponentVisible(true);
                }}
            >
                <div className={classes.rotoryMenu__container}>
                    <div className={classes.menuIcon} onClick={() => {
                        window.navigator.vibrate(10);
                        setRotateByAngle(rotatebyAngle + rotateOffset);

                    }} >
                        <MenuIcon sx={iconStyle} />
                    </div>
                    {isComponentVisible && <div className={classes['rotaryMenu__icons__wrapper']}>
                        {newI.map(item =>
                            <div
                                key={`rotaryIcon-${item.xCordinate}`}
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
                                    alignItems: "center"
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