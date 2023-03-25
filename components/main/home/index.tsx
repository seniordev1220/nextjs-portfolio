import React, { useContext } from 'react';
import Image from "next/image";
import { homeMessages } from "../../../messages/home";
import { DarKModeContext } from '../../layout/layout';
import classes from './home.module.scss';
import { Box } from '@mui/material';

export const Home = () => {
  const { isDarkMode } = useContext(DarKModeContext);

  return (
    <Box
      className={classes.intro__container}
      sx={isDarkMode ? {
        border: 'solid 1px #2f2f2fc4',
        boxShadow: '0 0 1rem #00000078'
      } : {}}
    >
      <div className={classes.intro__image__container}>
        <Image
          src={require('../../../assets/images/4.png')}
          alt="Photo of Anand, a full-stack web developer"
          loading="eager"
          priority
        />
      </div>
      <div className={classes.intro__content}>
        <h2 className={isDarkMode ? classes['intro__self--dark'] : classes['intro__self--light']}>{homeMessages.anand}<span className={classes.line}></span></h2>

        <div className={classes.slider__wrapper}>
          <div className={classes.slider}>
            <h1 className={classes.slider__text1}>{homeMessages.SOFTWARE_ENGINEER}</h1>
            <h1 className={classes.slider__text2}>{homeMessages.FULLSTACK_DEVELOPER}</h1>
            <h1 className={classes.slider__text3}>{homeMessages.Passionate_Mentor}</h1>
          </div>
        </div>

        <div className={classes.intro__horizontalSeparation} />
        <p className={classes.intro__description}>{homeMessages.intro}</p>
      </div>
    </Box>
  );
};
