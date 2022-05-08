import React from 'react'
import { Grid } from '@mui/material'
import { homeMessages } from "../../../messages/home"
import classes from './home.module.scss'

export const Home = () => {
  return (
    <div className={classes.intro__container}>
      <p className={classes.intro__self}>{homeMessages.anand}</p>
      <Grid container spacing={1}>
        <Grid item sm={12} md={4}>
          <h1 className={classes.intro__profession}>{homeMessages.fullStackWebDeveloper}</h1>
        </Grid>
        <Grid item md={1}>
          <div className={classes.intro__horizontalSeparation} />
        </Grid>
        <Grid item sm={12} md={7} >
          <h4 className={classes.intro__description}>{homeMessages.introDescription}</h4>
        </Grid>
      </Grid>
    </div>
  )
}
