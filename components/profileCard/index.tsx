import classes from './ProfileCard.module.scss'
import profile from "../../assets/images/profile.png"
import { Box, Typography } from "@mui/material"
import { useDarkMode } from '../../hooks/useDarkMode';

export const ProfileCard = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <Box
            sx={{
                backgroundImage: isDarkMode ? 'linear-gradient(to right, #000000,#0c0b0b,#0c0b0b,#000000 ,#000000)'
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