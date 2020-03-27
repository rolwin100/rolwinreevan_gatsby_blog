import React from "react"
import Header from "../components/PageLayout/Header"
import { Layout } from 'antd'

import SidebarWrapper from '../components/PageLayout/Sidebar'
import AboutMe from '../components/PageFragments/HomePage/AboutMe'
import Skills from '../components/PageFragments/HomePage/SkillProgress'
import SEO from '../components/Seo'

export default () =>
  <Layout className='outerPadding'>
    <Layout className='container'>
      <SEO
          title="About"
          description="Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack.Currently I work with mostly Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with AWS/ GCLOUD and have deployed applications keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool tools I use for CI/ CD. I'm always a learner and a self taught programmer."
          path=""
          keywords={['Rolwin','Reevan', 'Monteiro','FullStack developer','Javascript', 'ReactJS','NodeJS','Gatsby']}
      />
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
