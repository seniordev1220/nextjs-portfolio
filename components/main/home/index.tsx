import React, { useContext } from 'react'
import Image from "next/image"
import { homeMessages } from "../../../messages/home"
import image from "../../../assets/images/4.png"
import classes from './home.module.scss'
import { DarKModeContext } from '../../layout/layout'

export const Home = () => {
  const {isDarkMode} = useContext(DarKModeContext)
 
  return (
    <div className={classes.intro__container}>
      <div className={classes.intro__image__container}>
        <Image alt="Web Developer" priority src={image} />
      </div>
      <div className={classes.intro__content}>
        <h2 className={isDarkMode?classes['intro__self--dark']:classes['intro__self--light']}>{homeMessages.anand}<span className={classes.line}></span></h2>

        <div className={classes.slider__wrapper}>
          <div className={classes.slider}>
              <h1 className={classes.slider__text1}>SOFTWARE ENGINEER</h1>
              <h1 className={classes.slider__text2}>FULLSTACK DEVELOPER</h1>
              <h1 className={classes.slider__text3}>Passionate Mentor </h1>
          </div>
        </div> 




        <div className={classes.intro__horizontalSeparation} />
        <p className={classes.intro__description}>{
          `I specialize on building complex web applications that runs across platforms & devices.
          I am passionate about
          building excellent software that improves the lives of the user.`}
        </p>

      </div>
    </div>
  )
}
