import { useState, useEffect, useContext } from "react";
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
import { TabContext } from "../../../../pages";
import { joinClass } from "../../../../helpers/utils";

const rotorSize = 81;
const xOffset = 24;
const yOffset = 20;
const rotateOffset = 180;

export const RotaryMenu = () => {
    const { tabValue, handleTabChange } = useContext(TabContext)
    const { isDarkMode } = useDarkMode()
    const iconStyle = {
        color: "#2753d7",
        fontSize: "3rem",
        backgroundColor: isDarkMode ? "rgba(8, 8, 8, 1)" : "#fff",
        padding: "0.5rem",
        borderRadius: "50%",
        boxShadow: "0 0 0.5rem #2753d7"
    }

    const icons = [
        {
            name: "Skills",
            tabNumber: 3,
            IconComponent: <PsychologyIcon sx={iconStyle} />

        },
        {
            name: "Portfolio",
            tabNumber: 1,
            IconComponent: <BusinessCenterIcon sx={iconStyle} />

        },
        {
            name: "My Blogs",
            tabNumber: 2,
            IconComponent: <RssFeedIcon sx={iconStyle} />

        },
        
        {
            name: "Home",
            tabNumber: 0,
            IconComponent: <HomeIcon sx={iconStyle} />

        },
        {
            name: "About",
            tabNumber: 4,
            IconComponent: <PersonIcon sx={iconStyle} />


        },
        {
            name: "Contact",
            tabNumber: 5,
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
    const [is, setIs] = useState(isComponentVisible);


    useEffect(() => {
        setIs(isComponentVisible)
    }, [isComponentVisible])
    useEffect(() => {
        if (!isComponentVisible) {
            setRotateByAngle(0);
        }
    }, [isComponentVisible]);

    return (
        <div
            className={is ? classes["mainContainer--open"] : classes["mainContainer--close"]}
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
                className={is ? classes['rotaryMenu--open'] :
                    classes['rotaryMenu--close']}
                onClick={() => {
                    setIsComponentVisible(true);
                    setIs(true)
                }}
            >
                <div className={classes.rotoryMenu__container}>
                    <div className={joinClass(classes.menuIcon,!isComponentVisible?classes.bounce:"")} onClick={() => {
                        window.navigator.vibrate(10);
                        setRotateByAngle(rotateOffset);

                    }} >
                        <MenuIcon sx={iconStyle} />
                    </div>
                 
                    {is && <div className={classes['rotaryMenu__icons__wrapper']}>
                        {newI.map((item, index) =>
                            <div
                                onClick={() => {
                                    handleTabChange(null as any, item.tabNumber)
                                    setIs(false);
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
