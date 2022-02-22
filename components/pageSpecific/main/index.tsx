import React from 'react'
import classes from'./index.module.css'

function Images({src}:{src:string}) {
  return (
    <img className={classes.image} src={src}/>
  )
}



export default Images