import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `I’m a data geek entrepreneur who’s passionate about Big data, Data science, Web App and Music. I’m convinced that the best data scientists/engineer get out and talk to people, so I enjoy sharing ideas with business.
  `,
  paraTwo: `With a background in BI and data warehousing, I have gained experience on Big Data technologies (Hadoop, Spark, Kafka, etc) but investing my time to improve my analytics skills (statistical analysis and machine learning). I always keep my feet on the ground and take some times to do technology watch : continous learning is my motto. I’m also a startup entrepreneur and meetup lover : sharing is training.`,
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
