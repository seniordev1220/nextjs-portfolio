import React from 'react';
import Image from 'next/image';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import CircleIcon from '@mui/icons-material/Circle';
import idea from "../../../assets/images/idea.png";
import classes from "./skills.module.scss";

const skills = [
    "Javascript", "HTML/CSS", "React JS",
    "Next JS", "Sass", "Material-UI",
    "Webpack", "Rollup", "Storybook",
    "Node JS", "Express JS", "Docker",
    "PostgreSQL", "LocalStack", "Git",
    "Visual Studio Code"
];
const middleIndex = Math.ceil(skills.length / 2);

const firstHalf = skills.splice(0, middleIndex);
const secondHalf = skills.splice(-middleIndex);

export const Skills = () => {
    const { ref, inView } = useSetTab(sectionMapping.skill);
    const { isDarkMode } = useDarkMode()
    return (
        <Box sx={{
            borderRadius: "1rem",
            backgroundColor: isDarkMode ? "#ffffff04" : "white",
            ...!isDarkMode && { backgroundImage: "linear-gradient(to right, #e7f6ff,#c3dfff,#b6d8ff,#a1cdff ,#a1cdff )" }
        }}
            ref={ref}
            className={joinClass(classes.skills__container)}>
            <Box
                className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3rem",
                    color: isDarkMode ? "#696969" : "#353839aa",
                    fontWeight: "800",
                }}>
                <p>Things that I am good at</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography className={joinClass(classes.skills__title, inView?classes['header--show']:classes['header--hide'])} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                    My Skills</Typography>
            </Box>
            <Box className={classes.skills__content__wrapper}>
                <Box sx={{ display:"flex", justifyContent:"center" }} className={
                   joinClass( inView ? classes['image--show'] : classes['image--hide'], classes.image)}>
                    <Image width={400} height={400} src={idea} alt="Skills" />
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <Box sx={{ margin: "1rem" }} className={inView ? classes['skills--show--left'] : classes['skills--hide']}>
                        {firstHalf.map((item, index) => (
                            <Box key={`expListTab-${index}`} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <ListItemIcon>
                                    <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", fontSize: "1rem" }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </Box>))
                        }
                    </Box >
                    <Box sx={{ margin: "1rem" }} className={inView ? classes['skills--show--right'] : classes['skills--hide']}>
                        {secondHalf.map((item, index) => (
                            <Box key={`expListTab-${index}`} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <ListItemIcon>
                                    <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", fontSize: "1rem" }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </Box>))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
