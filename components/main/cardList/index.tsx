import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Card } from '../../card';
import { useSetTab } from '../../../hooks/useSetTab';
import { Background } from '../../background';
import classes from "./blogs.module.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const props = ["description", "title", "data", "sectionMapping"]
interface CardListProps {
    type: string,
    description: string;
    title: string;
    data: {
        id: number;
        title: string;
        date: string;
        description: string;
        image: string;
        slug: string;
        content: string;
    }[];
    sectionMapping: number
}

export const CardList = ({ type, description, title, data, sectionMapping }: CardListProps) => {

    const { ref } = useSetTab(sectionMapping);
    const { isDarkMode } = useDarkMode()
    return (
        <div ref={ref} className={classes.blogs__container}>
            <Background/>
            <Box sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: isDarkMode ? "#696969" : "#353839aa",
                    fontWeight: "800"

                }}>
                    <p>{description}</p>
                </Box>
                <Box component="span" sx={{ margin: "auto" }}>
                    <Typography className={classes.blogs__title} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                        {title}</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '90%'}}>
                <Carousel
                    emulateTouch
                    axis='horizontal'
                    centerMode
                    centerSlidePercentage={100}
                >
                    {data?.map((blog, index) => (
                        <Box key={`title:${blog.title}-${index}`}>
                            <Card
                                {...blog}
                                endpoint={type}
                            />
                        </Box>
                    )) as any
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
                    }}>
                        <Button variant='contained'
                        ><Link href="/blogs">View More</Link>
                        </Button>
                    </Box>
                </Carousel>
            </Box>

            {/* <Box className={classes.blogs__right__arrow}>
                {inView && <ScrollRight />}
                </Box> */}

        </div >
    )
}
