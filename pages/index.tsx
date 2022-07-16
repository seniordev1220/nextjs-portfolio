import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout/layout'
import { Home } from '../components/main/home'
import { Portfolio } from '../components/main/portfolio'
import { Quotes } from '../components/main/quotes'
import { Blogs } from '../components/main/blogs'
import { Contact } from '../components/main/contact'
// import { About } from '../components/main/about'
import { Skills } from '../components/main/skills'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../store/blogs/reducer'
import { Background } from '../components/background'
import classes from "./index.module.scss"
import About from '../components/pageSpecific/about'

export const TabContext = React.createContext({ tabValue: 0, handleTabChange: (event: React.SyntheticEvent, newValue: number) => { } });

const Main = () => {
  const [tabValue, settabValue] = React.useState(0);

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const refMap: any = {
    0: homeRef,
    1: portfolioRef,
    2: blogRef,
    3: skillRef,
    4: aboutRef,
    5: contactRef,
  }
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {

    settabValue(newValue);
    refMap[newValue]?.current?.scrollIntoView();
  };

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useEffect(() => {
    dispatch(getBlogs(null))
  }, [])

  console.log(state)
  return (

    <div className={classes['section__container']}>
      <TabContext.Provider value={{ tabValue, handleTabChange }}>

        <Background/>
        <Layout>
          <>
            <section ref={homeRef} className={classes['section--header']}>
              <Home />
              {/* <div className={classes['section--header__clippath']} /> */}
            </section>
            <section className={classes['section--quotes']}>
              <Quotes />
              {/* <div className={classes['section--left__clippath']} /> */}
            </section>
            <section ref={portfolioRef} className={classes['section--projects']}>
              <Portfolio />
              {/* <div className={classes['section--right__clippath']} /> */}
            </section>
            <section ref={blogRef} className={classes['section--projects']}>
              <Blogs />
              {/* <div className={classes['section--left__clippath']} /> */}
            </section>
            <section ref={skillRef} className={classes['section--projects']}>
              <Skills />
              {/* <div className={classes['section--right__clippath']} /> */}
            </section>
            <section ref={aboutRef} className={classes['section--about']}>
              <About />
              {/* <div className={classes['section--left__clippath']} /> */}
            </section>
            <section ref={contactRef} className={classes['section--projects']}>
              <Contact />
              {/* <div className={classes['section--right__clippath']} /> */}
            </section>
          </>
        </Layout>
      </TabContext.Provider>
    </div>
  )
}

export default Main
