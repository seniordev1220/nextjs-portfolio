import React from 'react'
import classes from './header.module.css'
import Link from 'next/link'

function Header({ }) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={'/'}>Home</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href={'/portfolio'}>Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default Header

