import { Box, Typography } from "@mui/material"
import { useDarkMode } from "../../../../hooks/useDarkMode"
import { BlogItemProps } from "./blog.type"
import Image from "next/image"
import blog from "../../../../assets/images/blog.jpg"
import classes from "./blogItem.module.scss"

export const Blog = ({ title, date, description, image, slug }: BlogItemProps) => {
    const { isDarkMode } = useDarkMode();
    return (
        // <Box sx={{ position: "relative" }}>
        <Box
            className={classes.card}
            sx={{
                height: "450px",
                padding: "1rem",
                margin: "1rem", width: "330px",
                ...isDarkMode && { backgroundColor: "#141212" },
                ...!isDarkMode&&{ backgroundImage:"linear-gradient(to right, #c1deff,#c1deff,#c1deff,#a1cdff ,#a1cdff )"},
                maxWidth: "280px",
                aspectRatio: "9/12",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "0 0 6px rgb(46 43 43 / 85%)"
            }}>
            <Box className={classes.blog__container} sx={{ marginBottom: "1rem", overflow: "hidden" }}>
                <Image className={classes.blog__image} layout="responsive" src={blog} alt={title} />
            </Box>
            <Typography sx={{ color: "#2753d7", fontWeight: "600" }}>{date}</Typography>
            <Typography component="h2" sx={{ fontWeight: "600", fontSize: "large" }}>{title}</Typography>
            <Typography sx={{ height: "100px", marginTop: "1rem" }}>{description}</Typography>
        </Box>
        // </Box>
    )
}
