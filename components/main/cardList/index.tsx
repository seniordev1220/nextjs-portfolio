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
import { Parallax } from 'react-scroll-parallax';

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
        <Box ref={ref} className={classes.blogs__container} sx={{
            ...isDarkMode && {
                border: 'solid 1px #2f2f2fc4',
                boxShadow: '0 0 1rem #00000078'
            }
        }}>
            <Background />
            <Box sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: isDarkMode ? "#696969" : "#353839aa",
                    fontWeight: "800"

                }}>
                    <Parallax opacity={[0, 1]} translateX={['-50%', '0%']}>
                        <p>{description}</p>
                    </Parallax>
                </Box>
                <Box component="span" sx={{ margin: "auto" }}>
                    <Typography className={classes.blogs__title} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                        {title}</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '90%' }}>
                <Carousel
                    className={classes.carousel}
                    verticalSwipe='standard'
                    useKeyboardArrows
                    showArrows
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
                        height: '100%',
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Button variant='contained'
                        ><Link href="/projects">View More</Link>
                        </Button>
                    </Box>
                </Carousel>
            </Box>

            {/* <Box className={classes.blogs__right__arrow}>
                {inView && <ScrollRight />}
                </Box> */}

        </Box >
    )
}
