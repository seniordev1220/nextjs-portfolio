import { Box } from '@mui/material';
import React from 'react';
import { joinClass } from '../../helpers/utils';
import MiniLogo from '../miniLogo';
import classes from "./styles.module.scss"

export const Loading = () => {
    return (
        <Box sx={
            {
                position: "fixed",
                top:"0",
                zIndex: "100",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100vh"
            }}>
            <MiniLogo />
            <Box sx={{ postition: "relative", display: "flex", flexDirection: "row", marginTop: "1rem" }}>
                <div className={classes.dot__loader}></div>
                <div className={joinClass(classes.dot__loader, classes.dot__loader__one)}></div>
                <div className={joinClass(classes.dot__loader, classes.dot__loader__two)}></div>
            </Box>
        </Box>

    )
}
