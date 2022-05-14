import React from 'react'
import { Home } from '../components/main/home'
import { Projects } from '../components/main/projects'
import { Quotes } from '../components/main/quotes'
import classes from "./index.module.scss"

const Main = () => {
  return (<>
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
    </section>
    <section className={classes['section--footer']}>
    </section>

  </>
  )
}

export default Main


// https://codepen.io/codingtuting/pen/XWrBgQz
