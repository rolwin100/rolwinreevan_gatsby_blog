import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col } from 'antd';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { usePlugin } from 'tinacms';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';
import AboutForm from '../../TinaCms/Forms/Home/AboutForm';

const AboutMe = () => {
  const queryResult = useStaticQuery(graphql`
    query MyQuery {
        pagesJson {
          aboutBlock {
            title
            about
          }

          rawJson
          fileRelativePath
        }
      }
  `);
  const [data, form] = useLocalJsonForm(queryResult.pagesJson, AboutForm);
  usePlugin(form);

  const description = stripTags(data.aboutBlock.about);

  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">{data.aboutBlock.title}</h1>
        <div dangerouslySetInnerHTML={domHtml(data.aboutBlock.about)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
