import React, { useContext } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { homeMessages } from "../../../messages/home";
import { DarKModeContext } from "../../layout/layout";

import classes from "./home.module.scss";

export const Home = () => {
  const { isDarkMode } = useContext(DarKModeContext);
  return (
    <Box
      className={classes.intro__container}
      sx={
        isDarkMode
          ? {
              boxShadow: "0 0 1rem #00000078",
            }
          : {}
      }
    >
      <div className={classes.intro__image__container}>
        <Image
          src={require("../../../assets/images/4.png")}
          alt="Photo of Anand, a full-stack web developer"
          loading="eager"
          priority
        />
      </div>
      <div className={classes.intro__content}>
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
      </div>
    </Box>
  );
};
