import { Button } from "@mui/material"
import Link from "next/link"
import { joinClass } from "../../../../helpers/utils"
import classes from "./projectItem.module.scss"
import { ProjectItemProps } from "./projectItem.type"

export const Project = ({ image, title, description, mainHeading }: ProjectItemProps) => {
    return (
        <div className={joinClass(classes.flip, classes.flip__vertical)}>
            <div className={classes.front}
                style={{
                    backgroundImage:
                        "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                }}
            >
                <h1 className={classes.text__shadow}>{mainHeading}</h1>
            </div>
            <div className={classes.back}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button variant='outlined'
                ><Link href="/projects">View More</Link>
                </Button>
            </div>
        </div>
    )
}
