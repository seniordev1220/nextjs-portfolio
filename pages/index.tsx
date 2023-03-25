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
import { getBlogs } from '../store/blogs/reducer'
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
    2: skillRef,
    3: aboutRef,
    4: contactRef,
  }
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    settabValue(newValue);
    refMap[newValue]?.current?.scrollIntoView();

  };

  const dispatch = useDispatch();
  const { projects, isProjectLoading } = useSelector<RootState>(state => state.project) as projectStateType;

  useEffect(() => {
    dispatch(getBlogs({ showHidden: false, limit: 5, offset: 0 }))
    dispatch(getProjects({ showHidden: false, limit: 5, offset: 0 }))

  }, [])

  return (
    <ParallaxProvider>
      <div className={classes['section__container']}>
        <Head>
          <title>Anand Krishnan M J Portfolio - Full Stack Developer</title>
          <meta name="description" content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, Express.js, PostgreSQL, Docker and Next.js." />
          <meta name="keywords" content="Anand Krishnan M J, Portfolio, Full Stack Developer, React.js, Node.js, Express.js, PostgreSQL, Next.js, Docker" />
          <meta name="author" content="Anand Krishnan M J" />
          <meta property="og:title" content="Anand Krishnan M J Portfolio - Full Stack Developer" />
          <meta property="og:description" content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, and Next.js." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.akmj.social" />
          <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1jmAPu8YWqt5mSQFZLqDjeCThv-G0XG1z" />
          <meta property="og:image:alt" content="Anand Krishnan M J Portfolio - Full Stack Developer" />
          <meta name="twitter:title" content="Anand Krishnan M J Portfolio - Full Stack Developer" />
          <meta name="twitter:description" content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, and Next.js." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://drive.google.com/uc?export=view&id=1jmAPu8YWqt5mSQFZLqDjeCThv-G0XG1z" />
          <link rel="canonical" href="https://www.akmj.social" />
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
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        {!(isProjectLoading) ?
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
