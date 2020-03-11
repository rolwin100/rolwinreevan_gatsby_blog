import React from 'react'
import { Row, Col } from 'antd'
import AboutTile from '../../AbouTile'

const AboutMe = () => <>
    <div>
        <h1 className="titleSeparate">About Me</h1>
        <p>
            Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is
            passionate about various web technologies. I like to experiment with different web
            technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack
            and ELK stack.
        </p>
        <p>
            Currently I work with mostly Javascript technologies like ReactJS and NodeJS. I also
            have hands on experience working with <b>AWS/ GCLOUD</b> and have deployed applications
            keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
            tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.
        </p>
    </div>
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
</>

export default AboutMe