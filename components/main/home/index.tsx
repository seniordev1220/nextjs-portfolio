import React, { useContext } from "react";
import Image from "next/image";
import { Box, Button, Link, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import { homeMessages } from "../../../messages/home";
import { DarKModeContext } from "../../layout/layout";
import { resume } from "../../../constants";

import classes from "./home.module.scss";

export const Home = () => {
  const { isDarkMode, darkModeIsloading } = useContext(DarKModeContext);
  return (
    <Box className={classes.intro__container}>
      <div className={classes.intro__image__container}>
        <Image
          src={require("../../../assets/images/4.png")}
          alt="Photo of Anand, a full-stack web developer"
          priority
        />
      </div>
      <div className={classes.intro__content}>
        {!darkModeIsloading && (
          <h2
            className={
              isDarkMode
                ? classes["intro__self--dark"]
                : classes["intro__self--light"]
            }
          >
            {homeMessages.anand}
            <span className={classes.line}></span>
          </h2>
        )}
        <div className={classes.slider__wrapper}>
          <div className={classes.slider}>
            <h2 className={classes.slider__text1}>
              {homeMessages.SOFTWARE_ENGINEER}
            </h2>
            <h2 className={classes.slider__text2}>
              {homeMessages.FULLSTACK_DEVELOPER}
            </h2>
            <h2 className={classes.slider__text3}>
              {homeMessages.Passionate_Mentor}
            </h2>
          </div>
        </div>

        <div className={classes.intro__horizontalSeparation} />
        <Typography className={classes.intro__description}>
          {homeMessages.intro}
        </Typography>
        <Box className={classes.intro__button__container}>
          <Link
            sx={{
              color: isDarkMode ? "white" : "black",
            }}
            href={resume}
            target="_blank"
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: "1rem",
                border: `solid 1px ${isDarkMode ? "#4e4e4e" : "#00000059"}`,
                color: isDarkMode ? "#a5a5a5" : "#313131",
                ":hover": {
                  borderColor: "#2753d7",
                },
              }}
            >
              Download Resume
              <DownloadIcon
                sx={{
                  marginLeft: "0.5rem",
                  color: isDarkMode ? "#a5a5a5" : "#00000059",
                }}
              />
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};
