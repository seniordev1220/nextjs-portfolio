
import { Grid, Box, Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { joinClass } from '../../../helpers/utils';
import { useScrollFetcher } from '../../../hooks/useScrollFetcher';
import { projects } from '../../../mock/projects';
import { Project } from './projectItem';
import classes from "./projects.module.scss"

export const Projects = () => {
    const showHeadingText = useScrollFetcher(900);

    return (
        <div className={joinClass(classes.projects__container)}>
            <div className={joinClass(classes['HeadingText'],
                showHeadingText ? classes['header--show'] : classes['header--hide'])}>
                <p className={classes.projects__header}>Things I,ve Built Recently</p>
                <p className={classes.projects__header}>Things I,ve Built Recently</p>
            </div>
            <Grid container className={classes.projects__content__wrapper}>
                {projects.map((project) => (
                    <Grid key={`title:${project.title}`} className={showHeadingText ?
                        classes['project--show'] : classes['project--hide']}
                        item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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