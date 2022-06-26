import React, { useState } from 'react'
import { Box, Button, Grid, Link, List, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import CircleIcon from '@mui/icons-material/Circle';
import classes from "./about.module.scss"


const experience = [

    {
        institute: "QBurst",
        startDate: "Sep 2020",
        endDate: "Present",
        worksDone: [
            "Write highly efficient and scalable code for a wide range of clients and internal projects.",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, NextJS, NodeJS, Webpack, and SASS"
        ]
    },
    {
        institute: "IIT-BHU",
        startDate: "June 2019",
        endDate: "Aug 2019",
        worksDone: [
            "Work on designing and testing of Meta-Surface based Antennas for radio frequency wireless communication.",
            "Works were later published in the '7th international conference on Computer and devices for Communication (CODEC)' held on December, 2019 and '2020 URSI Regional Conference on Radio Science (URSI-RCRS)'."
        ]
    }

]
const education = [
    {
        institute: "Government Engineering College, Trivandrum",
        startDate: "2016",
        endDate: "2020",
        worksDone: [
            "Bachelor of Technology in Electronics and Communication."
        ]
    }
]

export const About = () => {
    const { ref, inView } = useSetTab(sectionMapping.about);
    const { isDarkMode } = useDarkMode();
    const today = new Date();
    const birthDate = new Date("1997-09-18");
    const age = today.getFullYear() - birthDate.getFullYear();
    const [experienceTabValue, setExperienceTabValue] = useState(0);
    const [educationTabValue, setEducationTabValue] = useState(0);
    const handleExperienceTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setExperienceTabValue(newValue);
    };
    const handleEducationTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setEducationTabValue(newValue);
    };

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
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box className={inView ? classes['about--show'] : classes['about--hide']}>
                    <Typography sx={{ fontSize: "xx-large", fontWeight: "600", marginBottom: "1rem" }}>Personal Informations</Typography>
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

            </Box>
            <Box className={inView ? classes['button--show'] : classes['button--hide']}>
                <Box
                    sx={{ display: "flex", marginTop: "1rem", justifyContent: "center" }}>
                    <Button
                        variant="contained" sx={{ color: "white", marginBottom: "1rem" }}>
                        Download CV<DownloadIcon sx={{ marginLeft: "0.5rem" }} />
                    </Button>
                </Box>
                <Box sx={{ display: "flex", marginTop: "1rem", justifyContent: "center" }}>
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
            <Box className={joinClass(classes.shortDescription, inView ? classes['career--show'] : classes['career--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>Check Out My Resume</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['career--show'] : classes['career--hide']
                )}>
                    <p className={classes.about__header}>My Resume</p>
                    <p className={classes.about__header}>My Resume</p>
                </Box>
            </Box>
            <Box className={inView ? classes['career--show'] : classes['career--hide']} >
                <Box sx={{ display: "flex", justifyContent: "center", minHeight: "300px" }} >
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "xx-large", fontWeight: "600", marginRight: "1rem", marginLeft: "2rem" }}>
                            Experience
                        </Typography>

                        <Box className={classes['experience--desktop']} sx={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                            <Tabs orientation='vertical'
                                value={experienceTabValue}
                                onChange={handleExperienceTabChange}
                                TabIndicatorProps={{ style: { width: "2px" } }}
                                sx={{
                                    '.MuiTabs-indicator': {
                                        left: 0,
                                    },

                                    margin: "1rem",
                                    borderLeft: `solid 1px ${isDarkMode ? "#696969" : "#353839aa"}`
                                }}
                            >
                                {experience.map((item, index) => (
                                    <Tab
                                        key={`expTab-${index}`}
                                        sx={{ minWidth: "1rem", width: "8rem", textTransform: "none", fontWeight: "600", color: isDarkMode ? "#696969" : "#353839aa" }}
                                        label={item.institute} />
                                ))}
                            </Tabs>
                            {
                                <Box sx={{ width: "800px", maxWidth: "70%" }}>
                                    <List sx={{ display: "flex", flexDirection: "column" }}>
                                        {experience[experienceTabValue].worksDone.map((item, index) => (
                                            <Box key={`expListTab-${index}`} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa" }} fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            }
                        </Box>
                        <Box className={classes['experience--mobile']}>
                            {experience.map((item, index) => (
                                <Box  key={`expMobTab-${index}`}>
                                    <Typography sx={{ margin: "1rem", marginLeft: "2rem" }}>
                                        {item.institute}
                                    </Typography>
                                    <List sx={{ display: "flex", flexDirection: "column", margin: "1rem", marginLeft: "2rem" }}>
                                        {item.worksDone.map((item , index)=> (
                                            <Box  key={`expMobListTab-${index}`} sx={{ display: "flex", flexDirection: "row" }}>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", marginTop: "0.5rem" }} fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "xx-large", fontWeight: "600", marginRight: "1rem", marginLeft: "2rem" }}>
                            Education
                        </Typography>

                        <Box className={classes['experience--desktop']} sx={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                            <Tabs orientation='vertical'
                                value={educationTabValue}
                                onChange={handleEducationTabChange}
                                TabIndicatorProps={{ style: { width: "2px" } }}
                                sx={{
                                    '.MuiTabs-indicator': {
                                        left: 0,
                                    },
                                    margin: "1rem",
                                    borderLeft: `solid 1px ${isDarkMode ? "#696969" : "#353839aa"}`
                                }}
                            >
                                {education.map((item, index) => (
                                    <Tab
                                        key={`eduTabDesk-${index}`}
                                        sx={{
                                            minWidth: "1rem", width: "8rem",
                                            textTransform: "none", fontWeight: "600",
                                            color: isDarkMode ? "#696969" : "#353839aa"
                                        }}
                                        label={item.institute} />
                                ))}
                            </Tabs>
                            {
                                <Box sx={{ width: "800px", maxWidth: "70%" }}>
                                    <List sx={{ display: "flex", flexDirection: "column" }}>
                                        {education[educationTabValue].worksDone.map((item, index) => (
                                            <Box  key={`eduListDeskTab-${index}`} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa" }} fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            }
                        </Box>
                    </Box>
                    <Box className={classes['experience--mobile']}>
                        {education.map((item,index) => (
                            <Box  key={`eduMobTab-${index}`}>
                                <Typography sx={{ margin: "1rem", marginLeft: "2rem" }}>
                                    {item.institute}
                                </Typography>
                                <List sx={{ display: "flex", flexDirection: "column", margin: "1rem", marginLeft: "2rem" }}>
                                    {item.worksDone.map((item, index )=> (
                                        <Box  key={`eduMobList-${index}`} sx={{ display: "flex", flexDirection: "row" }}>
                                            <ListItemIcon>
                                                <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", marginTop: "0.5rem" }} fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </Box>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

        </div>
    )
}
