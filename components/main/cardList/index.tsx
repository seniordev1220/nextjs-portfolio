import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Card } from '../../card';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from "./blogs.module.scss"
import { ScrollRight } from '../../scrollRight';
const props = ["description", "title", "data", "sectionMapping"]
interface CardListProps{
    description:string;
    title:string;
    data:{
        id: number;
        title: string;
        date: string;
        description: string;
        image: string;
        slug: string;
        content: string;
    }[];
    sectionMapping:number
}

export const CardList = ({description, title, data, sectionMapping}: CardListProps) => {
    const { ref, inView } = useSetTab(sectionMapping);
    const { isDarkMode } = useDarkMode()
    return (
        <div ref={ref} className={joinClass(classes.blogs__container)}>
            <Box className={inView ? classes['header--show'] : classes['header--hide']} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>{description}</p>
            </Box>
            <Box component="span" sx={{ margin: "auto" }}>
                <Typography className={joinClass(classes.blogs__title, inView ? classes['header--show'] : classes['header--hide'])} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                   {title}</Typography>
            </Box>

            <Box className={classes.blogs__content__wrapper}>
                {data.map((blog) => (
                    <Box key={`title:${blog.title}`} className={joinClass(inView ?
                        classes['blog--show'] : classes['blog--hide'], classes.blogs__item)}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                            <Card
                                {...blog}
                            />
                        </Box>

                    </Box>
                ))
                }
                <Box sx={{
                    width: "330px",
                    marginBottom: "2rem",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                    className={
                        joinClass(inView ? classes['button--show'] : classes['button--hide'], classes.blogs__item)}>
                    <Button variant='contained'
                    ><Link href="/blogs">View More</Link>
                    </Button>
                </Box>
                

            </Box>
            <Box className={classes.blogs__right__arrow}>
                  {inView&&  <ScrollRight />}

                </Box>
        </div>
    )
}
