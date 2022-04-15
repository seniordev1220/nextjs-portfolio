import React from 'react'
import classes from './header.module.scss'
import Link from 'next/link'
import { RotaryMenu } from './menu'
import { Grid } from '@mui/material'

function Header({ }) {
    return (<>
        <header className={classes.header}>
            <Grid className={classes.ham__wrapper} container >
                <RotaryMenu />
            </Grid>
            <nav className={classes.navigation}>
                <Link href={'/'}>Home</Link>
                <Link href={'/portfolio'}>Experience</Link>
                <Link href={'/portfolio'}>Projects</Link>
                <Link href={'/portfolio'}>Contact</Link>
            </nav>
            
        </header>
    </>
    )
}



export default Header

