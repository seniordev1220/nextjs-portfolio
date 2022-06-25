import React from 'react'
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from "./about.module.scss"

export const About = () => {
    const { ref, inView } = useSetTab(sectionMapping.about);
    const { isDarkMode } = useDarkMode();
    const today = new Date();
    const birthDate = new Date("1997-09-18");
    const age = today.getFullYear() - birthDate.getFullYear();

    return (
        <div ref={ref} className={joinClass(classes.about__container)}>
            <Box className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>My Intro</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )}>
                    <p className={classes.about__header}>About Me</p>
                    <p className={classes.about__header}>About Me</p>
                </Box>
            </Box>
            <Box  sx={{ width: "95%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box className={inView ? classes['about--show'] : classes['about--hide']}>
                    <Typography sx={{ fontSize: "x-large", fontWeight: "600", marginBottom: "1rem" }}>Personal Informations</Typography>
                    <Grid container>
                        <Grid item xs={12} md={5} sx={{ margin: "1rem" }}>
                            <Typography sx={{ margin: "0.5rem", color: isDarkMode ? "#afafaf" : "#353535" }} component="p">First Name: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>Anand</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem" }} component="p">Last Name: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>Krishnan M J</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem" }} component="p">Address: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>695571, Trivandrum, Kerala</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem" }} component="p">From: <Typography component="span"
                                sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>🇮🇳 India</Typography></Typography>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ margin: "1rem" }}>
                            <Typography sx={{ margin: "0.5rem" }} component="p">Age: <Typography component="span"
                                sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>{age} years</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem", color: isDarkMode ? "#afafaf" : "#353535" }} component="p">Phone: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>+91 7907614429</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem", color: isDarkMode ? "#afafaf" : "#353535" }} component="p">E-Mail: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>anandkrishmj@gmail.com</Typography></Typography>
                            <Typography sx={{ margin: "0.5rem", color: isDarkMode ? "#afafaf" : "#353535" }} component="p">Languages: <Typography
                                component="span" sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>English, Malayalam, Hindi</Typography></Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={inView ? classes['button--show'] : classes['button--hide']}>
                    <Box
                        sx={{ display: "flex", marginTop: "1rem", justifyContent: "flex-start" }}>
                        <Button
                            variant="contained" sx={{ color: "white", marginBottom: "1rem" }}>
                            Download CV<DownloadIcon sx={{ marginLeft: "0.5rem" }} />
                        </Button>
                    </Box>
                    <Box>
                        <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                            href="https://twitter.com/ANANDKRISHNAN6">
                            <TwitterIcon sx={{ fontSize: "2rem" }} />
                        </Link>
                        <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                            href="https://www.linkedin.com/in/anand-krishnan-mj-a6332b154/">
                            <LinkedInIcon sx={{ fontSize: "2rem" }} />
                        </Link>
                        <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                            href="https://www.facebook.com/anandkrishnan.anandkrishnan">
                            <FacebookIcon sx={{ fontSize: "2rem" }} />
                        </Link>
                        <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                            href="https://github.com/Anand-Krishnan-M-J">
                            <GitHubIcon sx={{ fontSize: "2rem" }} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
