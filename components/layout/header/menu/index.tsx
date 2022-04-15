import { useState, useEffect } from "react";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import { Award } from "../../../icons/award";
import { Email } from "../../../icons/email";
import { Home } from "../../../icons/home ";
import { Menu } from "../../../icons/menu";
import { Phone } from "../../../icons/phone";
import { Blog } from "../../../icons/blog";
import { Education} from "../../../icons/education";
import classes from "./menu.module.scss";

const rotorSize = 81;
const xOffset = 28;
const yOffset = 20;
const rotateOffset = 180;
const iconHeight = "6rem"
const icons = [
    { icon: "award", IconComponent: <Award height={iconHeight} /> },
    { icon: "email", IconComponent: <Email height={iconHeight} /> },
    { icon: "home", IconComponent: <Home height={iconHeight} /> },
    { icon: "phone", IconComponent: <Phone height={iconHeight} /> },
    { icon: "education", IconComponent: <Education height={iconHeight} /> },
    { icon: "blog", IconComponent: <Blog height={iconHeight} /> },
]
const newI = icons.map((item, index) => {
    const angle = index * (360 / icons.length)
    const radianVal = angle * Math.PI / 180
    return {
        icon: item.icon,
        IconComponent: item.IconComponent,
        xCordinate: rotorSize + rotorSize * Math.cos(radianVal),
        yCordinate: rotorSize + rotorSize * Math.sin(radianVal),

    }
})

export const RotaryMenu = () => {

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
                        <Menu height="2.5rem" />
                    </div>

                    {isComponentVisible  && <div className={classes['rotaryMenu__icons__wrapper']}>
                        {newI.map(item =>
                            <div

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