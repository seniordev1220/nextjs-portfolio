import { Box, Typography } from "@mui/material"
import { useRouter } from 'next/router'
import { useDarkMode } from "../../hooks/useDarkMode"
import { CardItemProps } from "./card.type"
import classes from "./cardItem.module.scss"

export const Card = ({ title, date, description, image, slug , endpoint}: CardItemProps) => {
    const { isDarkMode } = useDarkMode();
    const router = useRouter();
    const handleRedirect = () => {
        router.push(
            {
                pathname: `${endpoint}/${slug}`,
            })
    }
    return (

        <Box
            className={classes.card}
            onClick={handleRedirect}
            sx={{
                height: "420px",
                padding: "1rem",
                margin: "1rem", width: "330px",
                ...isDarkMode && { backgroundColor: "#141212" },
                ...!isDarkMode && { backgroundImage: "linear-gradient(to right, #c1deff,#c1deff,#c1deff,#a1cdff ,#a1cdff )" },
                maxWidth: "280px",
                aspectRatio: "9/12",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "0 0 6px rgb(46 43 43 / 85%)"
            }}>
            <Box className={classes.card__container} sx={{ marginBottom: "1rem", overflow: "hidden" }}>
                <img className={classes.card__image} src={image} alt={title} />
            </Box>
            <Typography sx={{ color: "#2753d7", fontWeight: "600" }}>{date}</Typography>
            <Typography component="h2" sx={{ fontWeight: "600", fontSize: "large" }}>{title}</Typography>
            <Typography sx={{ height: "100px", marginTop: "1rem" }}>{description}</Typography>
        </Box>
    )
}
