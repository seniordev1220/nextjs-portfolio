import { alignProperty } from '@mui/material/styles/cssUtils'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout/layout'
import { Home } from '../components/main/home'
import { Projects } from '../components/main/projects'
import { Quotes } from '../components/main/quotes'
import { useInView } from "react-intersection-observer";
import classes from "./index.module.scss"

const Main = () => {

  return (
    <div className={classes['section__container']}>
      <Layout>
        <>
          <section className={classes['section--header']}>
            <Home />
            <div className={classes['section--header__clippath']} />
          </section>
          <section className={classes['section--quotes']}>
            <Quotes />
            <div className={classes['section--quotes__clippath']} />
          </section>
          <section className={classes['section--projects']}>
            <Projects />
            <div className={classes['section--projects__clippath']} />
          </section>
          <section className={classes['section--footer']}>
            <span>
              {" "}
            </span>
          </section>
        </>
      </Layout>
    </div>
  )
}

export default Main


// https://codepen.io/codingtuting/pen/XWrBgQz
