
import { Grid, Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { joinClass } from '../../../helpers/utils';
import { projects } from '../../../mock/projects';
import { Project } from './projectItem';
import classes from "./projects.module.scss"

export const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 1
      });

    return (
        <div ref={ref} className={joinClass(classes.projects__container)}>
            <div>
                <div className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )
                }
                >
                    <p className={classes.projects__header}>Things I,ve Built Recently</p>
                    <p className={classes.projects__header}>Things I,ve Built Recently</p>
                </div>
            </div>
            <Grid container className={classes.projects__content__wrapper}>
                {projects.map((project) => (
                    <Grid key={`title:${project.title}`} className={inView ?
                        classes['project--show'] : classes['project--hide']}
                        item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                            <Project
                                {...project}
                            />
                        </Box>
                    </Grid>
                ))
                }
            </Grid>
            <div className={classes.projects__button__container}>
                <Button variant='contained'
                ><Link href="/projects">View More</Link>
                </Button>
            </div>
        </div>
    )
}