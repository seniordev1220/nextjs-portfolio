import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material'
import Link from 'next/link'
import { joinClass } from '../../../helpers/utils';
import { Logo } from '../../Logo'
import { RotaryMenu } from './menu';
import { HeaderProps } from './headerPropsType'
import classes from './header.module.scss'

const routes = [
    {
        name: "Home",
        href: "/",

    },
    {
        name: "Projects",
        href: "/projects",

    },
    {
        name: "Skills",
        href: "/skills",

    },
    {
        name: "My Blogs",
        href: "/blogs",

    },
    {
        name: "About",
        href: "/about",

    },
    {
        name: "Contact",
        href: "/contact",

    }
]
function Header({ onDarkModeToggle, className }: HeaderProps) {
    const router = useRouter();
    const threshold = 10;

    const [currentRoute, setCurrentRoute] = useState("home");

    const [showNavBar, setShowNavBar] = useState(true);


    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
            Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

        const isScrollingUp = (currentScrollYPosition: number) =>
            currentScrollYPosition > previousScrollYPosition &&
            !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
            !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingUp(currentScrollYPosition)
                    ? false
                    : true;
                setShowNavBar(newScrollDirection);
                previousScrollYPosition =
                    currentScrollYPosition > 0 ? currentScrollYPosition : 0;
            }
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (router.pathname === "/") {
            setCurrentRoute("home")
        } else {
            setCurrentRoute(router.pathname.split('/')[1])
        }
    }, [router.pathname])

    return (<>
        <header >
            <Grid className={classes.ham__wrapper} container >
                <RotaryMenu />
            </Grid>
            <Grid container spacing={2}
                className={joinClass(showNavBar ?
                    classes['commonNavMenuContainer--show'] :
                    classes['commonNavMenuContainer--hide'], className)}
            >
                <Grid item xs={3}>
                    <div className={classes.logo__container}>
                        <Logo />
                    </div>

                </Grid>
                <Grid className={classes['navMenu--desktop__container']} item xs={8}>
                    <nav className={classes['navMenu--desktop']}>
                        {
                            routes.map(({ name, href }) => (
                                <div key={`navMenuitem-${name}`} className={classes['navMenu--desktop__items']}>
                                    <Link href={href} ><p>{name}</p></Link>
                                </div>
                            ))
                        }
                        <div className={classes[`navMenu--desktop__active__item--${currentRoute}`]}></div>
                    </nav>{console.log(currentRoute)}

                </Grid>
                <Grid className={classes['nightMode__container']} item xs={1}>
                    <Box display="flex" justifyContent="flex-end">
                        <input className={classes.toggle} type="checkbox" onChange={onDarkModeToggle} />
                    </Box>
                </Grid>
            </Grid>
        </header>
    </>
    )
}
export default Header
