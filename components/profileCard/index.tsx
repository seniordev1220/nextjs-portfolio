import classes from './ProfileCard.module.scss'
import profile from "../../assets/images/idea.png"
import { Box, Typography } from "@mui/material"
import { useDarkMode } from '../../hooks/useDarkMode';

export const ProfileCard = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <Box
            sx={{
                backgroundImage: isDarkMode ? 'linear-gradient(to right, #2c2c2c,#202020,#202020,#181818 ,#000000)'
                    : 'linear-gradient(to right, #e7f6ff,#c3dfff,#b6d8ff,#a1cdff ,#a1cdff)'

            }}
            className={classes.profile__card}>
            <Box className={classes.profile__image}>
                <Box className={classes.profile__image} >
                    <img src={profile.src} />
                </Box>
                <Box className={classes.caption}>
                    <Typography sx={{ color: '#2753d7', fontWeight: 600 }}>Anand Krishnan M J</Typography>
                    <Typography sx={{ fontWeight: 600 }}>Fullstack Developer</Typography>
                </Box>
            </Box>
        </Box>
    )
}