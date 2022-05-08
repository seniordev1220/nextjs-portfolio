import React from 'react'
import { Home } from '../components/main/home'
import { Projects } from '../components/main/projects'
import { Quotes } from '../components/main/quotes'

const Main = () => {
  return (<>
    <section>
      <Home />
    </section>
    <section>
      <Quotes />
    </section>
    <section>
      <Projects />
    </section>
    
  </>
  )
}

export default Main


// https://codepen.io/codingtuting/pen/XWrBgQz
