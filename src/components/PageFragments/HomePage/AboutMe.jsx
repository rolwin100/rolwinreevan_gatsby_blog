import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import Skills from './SkillProgress';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello, my name is Alif Munim. I'm a full-stack web developer with over 5 years of experience 
  building websites for schools and local businesses in my community. I began my web development journey
  at the age of 14 with foundational languages like HTML, CSS, and Javascript, as well as various CMS systems
  such as Wordpress and Shopify.`,
  paraTwo: `Just a few years into my freelance work, I landed a job as a web developer during my first year
  of university. I began experimenting with more advanced technologies such as the MERN stack, Docker, and Kubernetes.
  I just finished my second year at university and am now working full-time as an software engineering intern for IBM.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  const skills1 = {
    reactjs: "40",
    nodejs: "30",
    mongodb: "30"
  }
  const skills2 = {
    python: "50",
    shell: "50"
  }
  const skills3 = {
    nodejs: "20",
    mongodb: "20",
    docker: "60"
  }
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <br></br>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="A social network for Ryerson University computer science students."
            textH3="RyeConnect"
            githubSrc="https://github.com/alif-munim/rye-connect"
            {...skills1}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Machine learning and edge computing for face-mask detection."
            textH3="Mask On"
            githubSrc="https://github.com/kaitlin31415/IBM-Hackathon-Mask-Barrier-Detection"
            {...skills2}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="A basic docker-compose app that combines mongodb and nodejs."
            textH3="Docker Form"
            githubSrc="https://github.com/alif-munim/docker-node-mongo"
            {...skills3}
          />
        </Col>
        
      </Row>
    </>
  );
};
export default AboutMe;
