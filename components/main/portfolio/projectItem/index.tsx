import classes from "./projectItem.module.scss"
import { ProjectItemProps } from "./projectItem.type"

export const Project = ({ image, title, description }: ProjectItemProps) => {
   
    return (
        <div className={classes.card}>
            <img className={classes.cardImage} src={image} />
            <div className={classes.text}>
                <h2 className={classes.card__heading} data-splitting="">{title}</h2>
                <p className={classes.card__description} data-splitting="">{description}</p>
            </div>
        </div>
    )
}
