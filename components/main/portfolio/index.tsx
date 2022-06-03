import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { useSetTab } from '../../../hooks/useSetTab';
import { projects } from '../../../mock/projects';
import { sectionMapping } from '../sectionMapping';
import { Project } from './projectItem';
import classes from "./projects.module.scss"

export const Portfolio = () => {
    const { ref, inView } = useSetTab(sectionMapping.portfolio);
    const { isDarkMode } = useDarkMode();

    return (
        <div ref={ref} className={joinClass(classes.projects__container)}>
            <Box className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>Showcasing Some Of My Best Work</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )
                }
                >
                    <p className={classes.projects__header}>My Portfolio</p>
                    <p className={classes.projects__header}>My Portfolio</p>
                </Box>

            </Box>
            <Box className={classes.projects__content__wrapper}>
                {projects.map((project) => (
                    <Box key={`title:${project.title}`} className={inView ?
                        classes['project--show'] : classes['project--hide']}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                            <Project
                                {...project}
                            />
                        </Box>
                    </Box>
                ))
                }
                <Box sx={{
                    width: "250px",
                    marginBottom: "2rem",
                    marginTop: "1rem",
                    marginLeft:"1rem",
                    marginRight:"1rem",
                    display: "flex", 
                    alignItems: "center",
                    justifyContent:"center"
                }}
                    className={
                        inView ? classes['button--show'] : classes['button--hide']}>
                    <Button variant='contained'
                    ><Link href="/blogs">View More</Link>
                    </Button>
                </Box>
            </Box>
        </div>
    )
}