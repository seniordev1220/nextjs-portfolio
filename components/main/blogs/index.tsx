import React from 'react'
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { blogs } from '../../../mock/blogs';
import { Blog } from './blogItem';
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from "./blogs.module.scss"

export const Blogs = () => {
    const { ref, inView } = useSetTab(sectionMapping.blogs);
    const { isDarkMode } = useDarkMode()
    return (
        <div ref={ref} className={joinClass(classes.blogs__container)}>
            <Box className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>Check Out My Latest Blog Posts</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )
                }
                >
                    <p className={classes.blogs__header}>My Blogs</p>
                    <p className={classes.blogs__header}>My Blogs</p>
                </Box>

            </Box>
            <Box className={classes.blogs__content__wrapper}>
                {blogs.map((blog) => (
                    <Box key={`title:${blog.title}`} className={inView ?
                        classes['blog--show'] : classes['blog--hide']}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                            <Blog
                                {...blog}
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
