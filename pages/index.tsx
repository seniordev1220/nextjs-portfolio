import React, { useEffect, useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
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
import { RootState } from '../store/types'
import Head from 'next/head'
import { getProjects, projectStateType } from '../store/projects/reducer'
import { Loading } from '../components/Loading'

export const TabContext = React.createContext({ tabValue: 0, handleTabChange: (event: React.SyntheticEvent, newValue: number) => { } });

const Main = () => {
  const [tabValue, settabValue] = React.useState(0);

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  // const blogRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const refMap: any = {
    0: homeRef,
    1: portfolioRef,
    // 2: blogRef,
    3: skillRef,
    4: aboutRef,
    5: contactRef,
  }
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {

    settabValue(newValue);
    refMap[newValue]?.current?.scrollIntoView();
  };

  const dispatch = useDispatch();
  const { blogs, isBlogsLoading } = useSelector<RootState>(state => state.blog) as blogStateType;
  const { projects, isProjectLoading } = useSelector<RootState>(state => state.project) as projectStateType;

  useEffect(() => {
    dispatch(getBlogs({ showHidden: false, limit: 5, offset: 0 }))
    dispatch(getProjects({ showHidden: false, limit: 5, offset: 0 }))

  }, [])

  return (
    <ParallaxProvider>
      <div className={classes['section__container']}>
        <Head>
          <title>Anand Krishnan M J Portfolio</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {!(isBlogsLoading || isProjectLoading) ?
          <TabContext.Provider value={{ tabValue, handleTabChange }}>
            <Layout variant="l1">
              <>
                <Background />
                <section ref={homeRef} className={classes['section--home']}>
                  <Home />
                </section>
                <section className={classes['section--quotes']}>
                  <Quotes />
                </section>
                <section ref={portfolioRef} className={classes['section--projects']}>
                  <CardList type="projects" description='Showcasing Some Of My Best Work' title="My Portfolio"
                    data={projects} sectionMapping={sectionMapping.portfolio}
                  />
                </section>
                {/* <section ref={blogRef} className={classes['section--projects']}>
                <CardList type="blogs" description='Check Out My Latest Blog Posts' title=" My Blogs"
                  data={blogs} sectionMapping={sectionMapping.blogs}
                />
              </section> */}
                <section ref={skillRef} className={classes['section--skills']}>
                  <Skills />
                </section>
                <section ref={aboutRef} className={classes['section--about']}>
                  <About />
                </section>
                <section ref={contactRef} className={classes['section--contact']}>
                  <Contact />
                </section>
              </>

            </Layout>

          </TabContext.Provider> :
          <Loading />
        }
      </div>
    </ParallaxProvider>
  )
}

export default Main
