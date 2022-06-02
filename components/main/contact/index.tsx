import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import classes from "./contact.module.scss"


export const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 1
    });
    const { isDarkMode } = useDarkMode();
    const textFieldStyle = {
        backgroundColor: isDarkMode ? "#rgb(54 54 54 / 87%)" : "#ffffff00",
        boxShadow: isDarkMode ? "0 0 10px rgb(0 0 0 / 85%)" : "0 0 10px rgb(125 125 125 / 35%)",
        width: "100%",
        marginTop: "1rem",

    }
    return (
        <Box ref={ref} sx={{
            backgroundColor: isDarkMode ? "#141414" : "white",
            borderRadius: "1rem",
            color: "white",
            ...!isDarkMode && { backgroundImage: "linear-gradient(to right, #e7f6ff,#c3dfff,#b6d8ff,#a1cdff ,#a1cdff )" }

        }}
            className={joinClass(classes.contact__container)}>
            <Box className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>Feel Free To Contact Me</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )
                }
                >
                    <p className={classes.contact__header}>My Contact</p>
                    <p className={classes.contact__header}>My Contact</p>
                </Box>

            </Box>
            <Box className={classes.contact__content__wrapper}>
                <Grid container spacing={2} className={inView ? classes['contact--show'] : classes['contact--hide']}>
                    <Grid item xs={12} md={7} >
                        <Box sx={{ padding: "1rem" }}>
                            <Typography fontWeight={600} color={isDarkMode ? "white" : "#696969"} component="p" fontSize="x-large">Contact Me</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={textFieldStyle}
                                        label={<Typography fontWeight={600} color="#696969">Name</Typography>} variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={textFieldStyle}
                                        label={<Typography fontWeight={600} color="#696969">Email</Typography>} variant="outlined" />
                                </Grid>

                            </Grid>

                            <TextField sx={textFieldStyle}
                                label={<Typography fontWeight={600} color="#696969">Subject</Typography>}
                                variant="outlined"
                            />
                            <TextField multiline minRows={5} maxRows={5} sx={textFieldStyle}
                                label={<Typography fontWeight={600} color="#696969">Message</Typography>}
                                variant="outlined" />
                            <Box sx={{
                                width: "100%",
                                marginBottom: "2rem",
                                marginTop: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                            }}
                                className={
                                    inView ? classes['button--show'] : classes['button--hide']}>
                                <Button sx={{ width: "200px", backgroundColor: "#2753d7" }} variant='contained'>
                                    Send message
                                </Button>
                            </Box>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ padding: "1rem" }}>
                            <Typography fontWeight={600} color={isDarkMode ? "white" : "#696969"} fontSize="x-large">Contact Info</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1rem", marginBottom: "1rem" }}>
                                <PersonIcon sx={{ color: "#2753d7", marginRight: "1rem", fontSize: "2.5rem" }} />
                                <Box>
                                    <Typography component="p" color={isDarkMode ? "white" : "#696969"} fontWeight={600}>Name</Typography>
                                    <Typography color="#2753d7">Anand krishnan M J</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1rem", marginBottom: "1rem" }}>
                                <LocationOnIcon sx={{ color: "#2753d7", marginRight: "1rem", fontSize: "2.5rem" }} />
                                <Box>
                                    <Typography component="p" color={isDarkMode ? "white" : "#696969"} fontWeight={600}>Location</Typography>
                                    <Typography color="#2753d7">695571, Kerala, India</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1rem", marginBottom: "1rem" }}>
                                <PhoneIcon sx={{ color: "#2753d7", marginRight: "1rem", fontSize: "2.5rem" }} />
                                <Box>
                                    <Typography component="p" color={isDarkMode ? "white" : "#696969"} fontWeight={600}>Call Me</Typography>
                                    <Typography color="#2753d7">
                                        <Link href="tel:+917907614429">+91 7907614429</Link>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1rem", marginBottom: "1rem" }}>
                                <EmailIcon sx={{ color: "#2753d7", marginRight: "1rem", fontSize: "2.5rem" }} />
                                <Box>
                                    <Typography component="p" color={isDarkMode ? "white" : "#696969"} fontWeight={600}>Email Me</Typography>
                                    <Typography color="#2753d7">
                                        <Link href="mailto:anandkrishmj@gmail.com">anandkrishmj@gmail.com</Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>

            </Box>

        </Box>
    )
}
