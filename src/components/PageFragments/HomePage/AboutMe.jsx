import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `I’m a data geek entrepreneur who’s passionate about Big data, Data science, Web App and Music. With more than 6 years of experience, I got the opportunity to work on multiple aspect regarding data engineering, that includes data pipelines (stream/batch), data modeling, orchestration, infrastructure and from time to time analytical reports using dashboarding tools.`,
  paraTwo: `I always keep my feet on the ground and take some times to do technology watch : continous learning is my motto. I’m also a startup entrepreneur, meetup lover and blogger : sharing is caring.`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Mehdi', 'Ouazza', 'Berlin', 'data engineer', 'Python', 'Spark', 'Big data']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="undraw_code_thinking_1jeh.svg"
            alt="coding"
            textH3="Entrepreuneur and coder"
            textH4="passionate"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="undraw_happy_music_g6wc.svg"
            alt="music"
            textH3="Musician"
            textH4="Let it sing"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="undraw_play_time_7k7b.svg"
            alt="family"
            textH3="Father and Husband"
            textH4="When away from my keyboard"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
