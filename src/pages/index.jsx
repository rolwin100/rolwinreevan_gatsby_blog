import React from "react"
import Header from "../components/PageLayout/Header";
import { Row, Col, Layout } from 'antd'
import style from './home.module.less'
import AboutTile from '../components/AbouTile'
import ProgressBar from '../components/Progress'
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/AboutMe'

const { Content } = Layout
export default () =>
  <Layout className={style.outerPadding}>
    <Layout className={style.container}>
      <Header />
      <SidebarWrapper>
        <Layout className={`${style.background} ${style.boxContent}`}>
          <AboutMe />
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='location.png'
                height={60}
                alt='location image'
                textH4='Born and bought up in'
                textH3='Mangalore, KA, India'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='coffee.png'
                alt='coffee image'
                textH4='Love Coffee'
                textH3='Coffee + Me = Happiness'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='meeting.png'
                alt='meeting image'
                textH4='Socially Awkward'
                textH3='At times'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='motorcycle.png'
                alt='motorcycle image'
                textH4='Love Riding'
                textH3='Biker for life'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='web.png'
                alt='web image'
                textH4='Self Taught Programmer'
                textH3='Thanks to the Web Resources'
                height={60} width={60}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <AboutTile
                img='graduation.png'
                alt='graduation image'
                textH4='Pursued B.Tech in'
                textH3='Computer Science'
                height={60} width={60}
              />
            </Col>
          </Row>
          <div>
            <h2>My Skills</h2>
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={12} >

                <ProgressBar
                  percent={80}
                  text='Javascript'
                />
                <ProgressBar
                  percent={95}
                  text='ReactJS'
                />
                <ProgressBar
                  percent={85}
                  text='Gatsby'
                />
                <ProgressBar
                  percent={90}
                  text='NodeJS'
                />
              </Col>
              <Col xs={24} sm={24} md={12} >
                <ProgressBar
                  percent={70}
                  text='Python'
                />
                <ProgressBar
                  percent={90}
                  text='Mysql'
                />
                <ProgressBar
                  percent={78}
                  text='MongoDB'
                />
                <ProgressBar
                  percent={80}
                  text='Wordpress'
                />
              </Col>
            </Row>
          </div>
        </Layout>
      </SidebarWrapper>
    </Layout>
  </Layout>
