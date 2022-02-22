import Link from 'next/link'
import { MouseEventHandler } from 'react'
import classes from "./button.module.css"

function Button({onClick, href, children }: ButtonPropType) {
if(href){
    return <Link href={href}>
        <a className={classes.btn}>{children}</a>
    </Link>
}
return <button className={classes.btn} onClick={onClick}>{children}</button>
}
interface ButtonPropType {
    href?: string;
    children: string;
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>{}
}

export default Button