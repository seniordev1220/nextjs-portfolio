import React, { useContext } from 'react'
import Image from "next/image"
import { homeMessages } from "../../../messages/home"
import image from "../../../assets/images/4.png"
import { DarKModeContext } from '../../layout/layout'
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from './home.module.scss'

export const Home = () => {
  const { isDarkMode } = useContext(DarKModeContext)
  const { ref } = useSetTab(sectionMapping.home);
  return (
    <div ref={ref} className={classes.intro__container}>
      <div className={classes.intro__image__container}>
        <Image alt="Web Developer" priority src={image} />
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
        <p className={classes.intro__description}>{
          homeMessages.intro}
        </p>
      </div>
    </div>
  )
}
