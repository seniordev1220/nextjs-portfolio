import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout/layout'
import { Home } from '../components/main/home'
import { Quotes } from '../components/main/quotes'
import { CardList } from '../components/main/cardList'
import { Contact } from '../components/main/contact'
import { About } from '../components/main/about'
import { Skills } from '../components/main/skills'
import { useDispatch, useSelector } from 'react-redux'
import { blogStateType, getBlogs } from '../store/blogs/reducer'
import { Background } from '../components/background'
import { sectionMapping } from "../components/main/sectionMapping";

import classes from "./index.module.scss"
import { projects } from '../mock/projects'
import { RootState } from '../store/types'

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
  const { blogs } = useSelector<RootState>(state => state.blog) as blogStateType;

  useEffect(() => {
    dispatch(getBlogs({showHidden:false, limit:5, offset:0}))
  }, [])

  return (

    <div className={classes['section__container']}>
      <TabContext.Provider value={{ tabValue, handleTabChange }}>

        <Layout variant="l1">
          <>
            <Background />
            <section ref={homeRef} className={classes['section--header']}>
              <Home />
            </section>
            <section className={classes['section--quotes']}>
              <Quotes />
            </section>
            <section ref={portfolioRef} className={classes['section--projects']}>
              <CardList description='Showcasing Some Of My Best Work' title="My Portfolio"
                data={projects} sectionMapping={sectionMapping.portfolio}
              />
            </section>
            <section ref={blogRef} className={classes['section--projects']}>
              <CardList description='Check Out My Latest Blog Posts' title=" My Blogs"
                data={blogs} sectionMapping={sectionMapping.blogs}
              />
            </section>
            <section ref={skillRef} className={classes['section--projects']}>
              <Skills />
            </section>
            <section ref={aboutRef} className={classes['section--about']}>
              <About />
            </section>
            <section ref={contactRef} className={classes['section--projects']}>
              <Contact />
            </section>
          </>
        </Layout>
      </TabContext.Provider>
    </div>
  )
}

export default Main
