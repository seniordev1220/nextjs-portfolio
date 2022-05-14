import React from 'react'
import Image from "next/image"
import { Grid } from '@mui/material'
import { homeMessages } from "../../../messages/home"
import image from "../../../assets/images/4.png"
import classes from './home.module.scss'

export const Home = () => {
  return (
    <div className={classes.intro__container}>
      <div className={classes.intro__image__container}>
        <Image alt="Web Developer" priority src={image} />
      </div>
      <div className={classes.intro__content}>
        <h2 className={classes.intro__self}>{homeMessages.anand}</h2>
        <h1 className={classes.intro__profession}>{homeMessages.fullStackWebDeveloper}</h1>
        <div className={classes.intro__horizontalSeparation} />
        <p className={classes.intro__description}>{
          `I'm a software engineer, specializing in building simple to complex and
          interactive web applications that run across platforms & devices.
          I am passionate about
          building excellent software that improves the lives of those
          around me.`}
        </p>

      </div>
    </div>
  )
}
