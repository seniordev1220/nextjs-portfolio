import Image from 'next/image'
import React from 'react'
import classes from'./index.module.css'

function Images({src}:{src:string}) {
  return (
    <Image className={classes.image} src={src} alt={"Loading..."}/>
  )
}



export default Images