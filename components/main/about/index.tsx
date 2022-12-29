import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Link, List, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from "./about.module.scss"
import { Quotes } from '../quotes';


const experience = [

    {
        institute: "QBurst",
        startDate: "Sep 2020",
        endDate: "Present",
        designation: "Engineer @ QBurst",
        worksDone: [
            "Write highly efficient and scalable code for a wide range of clients and internal projects.",
            "Work with a variety of different languages, platforms, frameworks, and content management systems using technolgies such as JavaScript, TypeScript, React, NextJS, NodeJS, Webpack, and SASS"
        ]
    },
    {
        institute: "IIT-BHU",
        startDate: "June 2019",
        endDate: "Aug 2019",
        designation: "Trainee @ Indian Institute of Technology, BHU, Varanai",
        worksDone: [
            "Worked on designing, simulating and testing of Meta-Surface based Antennas for radio frequency wireless communication.",
            <span key="pub1" >One of my first works was approved and published in the <a
                style={{ textDecoration: "underline" }}
                target="blank"
                href="https://www.springerprofessional.de/en/dual-band-fss-backed-printed-antenna-with-fractal-geometry-for-w/18830738"
            > 7th international conference on Computer and devices for Communication (CODEC)</a> held on December, 2019
            </span>,
            <span key="pub2">Later on I came with my second prototype and was published in <a
                style={{ textDecoration: "underline" }}
                target="blank"
                href="https://ieeexplore.ieee.org/document/9113517"
            > 2020 URSI Regional Conference on Radio Science (IEEE)</a>.</span>
        ]
    }

]
const education = [
    {
        institute: "Graduation",
        startDate: "2016",
        endDate: "2020",
        designation: "Engineering in EC @ Government Engineering College, Bartonhill, Trivandrum",

    },
    {
        institute: "Higher Secondary",
        startDate: "2013",
        endDate: "2015",
        designation: "Computer Science @ Central Board of Secondary Education",
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
                <p>Somethings about me</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography className={joinClass(classes.about__title, inView ? classes['header--show'] : classes['header--hide'])} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                    About Me</Typography>
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
                        href="https://twitter.com/ANANDKRISHNAN6" target="_blank">
                        <TwitterIcon sx={{ fontSize: "2rem" }} />
                    </Link>
                    <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                        href="https://www.linkedin.com/in/anand-krishnan-mj-a6332b154/" target="_blank">
                        <LinkedInIcon sx={{ fontSize: "2rem" }} />
                    </Link>
                    <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                        href="https://www.facebook.com/anandkrishnan.anandkrishnan" target="_blank">
                        <FacebookIcon sx={{ fontSize: "2rem" }} />
                    </Link>
                    <Link sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
                        href="https://github.com/Anand-Krishnan-M-J" target="_blank">
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

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography className={joinClass(classes.about__title, inView ? classes['career--show'] : classes['career--hide'])} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                    My Resume</Typography>
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
                                        <Typography component="h2" fontWeight="600" fontSize="1.5rem">{experience[experienceTabValue].designation}</Typography>
                                        <Typography sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}>{`${experience[experienceTabValue].startDate} - ${experience[experienceTabValue].endDate}`}</Typography>

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
                                <Box key={`expMobTab-${index}`}>
                                    <Accordion sx={{ backgroundColor: isDarkMode ? "#29292930" : "#a1cdff1c" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa" }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ color: "inherit" }}
                                        >
                                            <Typography sx={{
                                                marginTop: "1rem", marginBottom: "1rem", fontWeight: "600", fontSize: "1.2rem",
                                                color: isDarkMode ? "#696969" : "#353839aa"
                                            }}>
                                                {`${item.designation}`}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List sx={{ display: "flex", flexDirection: "column", margin: "1rem", marginLeft: "2rem" }}>
                                                {item.worksDone.map((item, index) => (
                                                    <Box key={`expMobListTab-${index}`} sx={{ display: "flex", flexDirection: "row" }}>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", marginTop: "0.5rem" }} fontSize="small" />
                                                        </ListItemIcon>
                                                        <ListItemText sx={{ color: isDarkMode ? "#696969" : "#353839aa" }} primary={item} />
                                                    </Box>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
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
                                    <Typography component="h2" fontWeight="600" fontSize="1.5rem">{education[educationTabValue].designation}</Typography>
                                    <Typography sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}>
                                        {`${education[educationTabValue].startDate} - ${education[educationTabValue].endDate}`}
                                    </Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                    <Box className={classes['experience--mobile']}>
                        {education.map((item, index) => (
                            <Box key={`eduMobTab-${index}`}>
                                <Typography sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "600", fontSize: "1.2rem" }}>
                                    {item.institute}
                                </Typography>
                                <Typography>{item.designation}</Typography>
                                <Typography sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}>
                                    {`${item.startDate} - ${item.endDate}`}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className={classes['quote']}>
                    <Quotes />
                </Box>
            </Box>

        </div>
    )
}
