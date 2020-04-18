import React from 'react';
import { Layout } from 'antd';
import { Link, graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import style from './404.module.less';

import { Sidebar404 } from '../../components/PageLayout/Sidebar';

export const query = graphql`
  {
    file(base: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <Sidebar404>
        <>
          <div className={`${style.sidebar404Img} ${style.boxContent}`}>
            <img
              src={data.file.childImageSharp.fluid.src}
              width="100%"
              alt="404"
            />
          </div>
          <div className={`textCenter ${style.boxContent}`}>
            <h1>This page was lost</h1>
            <p>
              The Page You are looking for isn’t available. Try to search again or use
              the Go Back button below.
            </p>
            <Link to="/">
              <div className={`centerAlign ${style.textHover}`}>
                <div className={`${style.goBackBtn}`}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z" /></svg>
                </div>
                <span>Go Back</span>
              </div>
            </Link>
          </div>
        </>
      </Sidebar404>
    </Layout>
  </Layout>
);
