import React from 'react'
import Header from './header/header'

function Layout({ children }: LayoutPropType) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

interface LayoutPropType {
    children: JSX.Element
}

export default Layout