import React from "react"
import Header from "../components/PageLayout/Header"
import { Layout } from 'antd'

import SidebarWrapper from '../components/PageLayout/Sidebar'
import AboutMe from '../components/PageFragments/HomePage/AboutMe'
import Skills from '../components/PageFragments/HomePage/SkillProgress'

export default () =>
  <Layout className='outerPadding'>
    <Layout className='container'>
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
