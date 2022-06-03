import React, { useRef } from 'react'
import Layout from '../components/layout/layout'
import { Home } from '../components/main/home'
import { Portfolio } from '../components/main/portfolio'
import { Quotes } from '../components/main/quotes'
import { Blogs } from '../components/main/blogs'
import { Contact } from '../components/main/contact'
import classes from "./index.module.scss"

export const TabContext = React.createContext({ tabValue: 0, handleTabChange: (event: React.SyntheticEvent, newValue: number) => { } });

const Main = () => {
  const [tabValue, settabValue] = React.useState(0);

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const refMap:any = {
    0: homeRef,
    1: portfolioRef,
    2: blogRef,
    5: contactRef,
  }
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    
    settabValue(newValue);
    refMap[newValue]?.current?.scrollIntoView();
  };


  return (
    <div className={classes['section__container']}>
      <TabContext.Provider value={{ tabValue, handleTabChange }}>
        <Layout>
          <>
            <section ref={homeRef} className={classes['section--header']}>
              <Home />
              <div className={classes['section--header__clippath']} />
            </section>
            <section className={classes['section--quotes']}>
              <Quotes />
              <div className={classes['section--quotes__clippath']} />
            </section>
            <section ref={portfolioRef} className={classes['section--projects']}>
              <Portfolio />
              <div className={classes['section--projects__clippath']} />
            </section>
            <section ref={blogRef} className={classes['section--projects']}>
              <Blogs />
              <div className={classes['section--quotes__clippath']} />
            </section>
            <section ref={contactRef} className={classes['section--projects']}>
              <Contact />
              <div className={classes['section--projects__clippath']} />
            </section>
            <section className={classes['section--footer']}>
              <span>
                {" "}
              </span>
            </section>
          </>
        </Layout>
      </TabContext.Provider>
    </div>
  )
}

export default Main


// https://codepen.io/codingtuting/pen/XWrBgQz
