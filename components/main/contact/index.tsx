import React, { useState } from 'react'
import { Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { sectionMapping } from '../sectionMapping';
import { useDispatch, useSelector } from 'react-redux';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from "./contact.module.scss"
import { emailStateType, sendEmail } from '../../../store/email/reducer';
import { RootState } from '../../../store/types';
import { Loading } from '../../Loading';
import { Background } from '../../background';

interface contactDataType {
    name: string
    email: string
    subject: string
    message: string
}
export const Contact = () => {
    const { ref } = useSetTab(sectionMapping.contact);
    const { isDarkMode } = useDarkMode();

    const [open, setOpen] = React.useState(false);
    const { isLoading } = useSelector<RootState>(state => state.email) as emailStateType;

    const dispatch = useDispatch();
    const textFieldStyle = {
        marginTop: "0.5rem",
        backgroundColor: isDarkMode ? "#rgb(54 54 54 / 87%)" : "#ffffff00",
        width: "100%",
        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline ": {
            border: "solid 1px #2753d79e",
            boxShadow: isDarkMode ? "0 0 1px #2753d7" : "0 0 2px rgb(125 125 125 / 35%)"
        }
    }
    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [contactData, setContactData] = useState<contactDataType>(initialFormData);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactData(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false });

    const onSendmessage = () => {
        let errors = { name: false, email: false, subject: false, message: false }
        Object.keys(contactData).map((item) => {
            const dataItem = contactData[item as keyof typeof contactData];
            dataItem === "" ? errors = { ...errors, [item]: true } : errors = { ...errors, [item]: false }
        })
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (contactData.email.match(mailFormat)) {
            errors = { ...errors, email: false }
        }
        else {
            errors = { ...errors, email: true }
        }
        setErrors(errors);
        const validity = !Object.values(errors).includes(true);
        if (validity === true) {
            dispatch(sendEmail({
                data: contactData, reset: () => {
                    setContactData(initialFormData);
                    handleSuccess()
                }
            }))
        }
    }

    const handleSuccess = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <Box ref={ref} sx={{
            backgroundColor: isDarkMode ? "#141414" : "white",
            borderRadius: "1rem",
            color: "white",
            ...!isDarkMode && { backgroundImage: "linear-gradient(to right, #e7f6ff,#c3dfff,#b6d8ff,#a1cdff ,#a1cdff )" }

        }}
            className={joinClass(classes.contact__container)}>
            <Box className={classes.shortDescription} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"

            }}>
                <p>Feel Free To Contact Me</p>
            </Box>

            <Box component="span" sx={{ margin: "auto" }}>
                <Typography className={classes.contact__title} sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}>
                    My Contact</Typography>
            </Box>
            <Box className={classes.contact__content__wrapper}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={7} >
                        <Box sx={{ padding: "1rem" }}>
                            <Typography fontWeight={600} color={isDarkMode ? "white" : "#696969"} component="p" fontSize="x-large">Contact Me</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        error={errors.name}
                                        helperText={errors.name ? "Please enter your name" : " "}
                                        label={<Typography fontWeight={600} color="#696969">Name</Typography>}
                                        sx={textFieldStyle}
                                        name="name"
                                        value={contactData.name}
                                        onChange={handleChange}
                                        inputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
                                        color="primary"
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        error={errors.email}
                                        helperText={errors.email ? "Please enter your valid Email Id" : " "}
                                        name="email"
                                        value={contactData.email}
                                        onChange={handleChange}
                                        sx={textFieldStyle} inputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
                                        label={<Typography fontWeight={600} color="#696969">Email</Typography>} variant="outlined" />
                                </Grid>
                            </Grid>
                            <TextField
                                error={errors.subject}
                                helperText={errors.subject ? "Please enter the email subject" : " "}
                                onChange={handleChange}
                                name="subject"
                                value={contactData.subject}
                                sx={textFieldStyle} inputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
                                label={<Typography fontWeight={600} color="#696969">Subject</Typography>}
                                variant="outlined"
                            />
                            <TextField
                                error={errors.message}
                                helperText={errors.message ? "Please enter the the email message" : " "}
                                onChange={handleChange}
                                name="message"
                                value={contactData.message}
                                multiline minRows={5} maxRows={5} sx={textFieldStyle} inputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
                                label={<Typography fontWeight={600} color="#696969">Message</Typography>}
                                variant="outlined" />
                            <Box sx={{
                                width: "100%",
                                marginBottom: "2rem",
                                marginTop: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Button
                                    onClick={onSendmessage}
                                    sx={{ width: "200px", backgroundColor: "#2753d7" }} variant='contained'>
                                    Send message
                                </Button>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={5} sx={{ marginBottom: '5rem' }}>
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
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Email Sent Successfully"
                />
            </Box>
            {isLoading && <Loading sxProp={{ position: "absolute" }} />}
        </Box>
    )
}
