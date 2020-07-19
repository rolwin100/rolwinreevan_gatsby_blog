/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import TagCard from '../../components/TagCard';
import Config from '../../../config';

const Tags = ({ data }) => {
  const { allFile: { edges } } = data;
  const rawTags = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter.tags)
    .reduce((prev, curr) => prev.concat(curr));
  rawTags
    .filter((tag, index) => index === rawTags.indexOf(tag))
    .sort(); // Remove duplicates and sort values
  // const tagPage = Config.pages.tag;
  const tagData = Config.tags;
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Tags"
          description="This page consists of various Tags on various technologies that I'll be using
          to write blogs. You can check the blogs related to the tags by clicking on any of the tags below."
          path="tags"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">#Tags</h1>
            </div>
            <Row gutter={[30, 20]}>
              {
                edges.map((val) => (
                  <Col key={val.node.name} xs={24} sm={24} md={12} lg={8}>
                    <TagCard
                      img={val.node.childImageSharp.fluid.src}
                      name={val.node.name}
                      description={tagData[val.node.name].description}
                      color={tagData[val.node.name].color}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md$/" } }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Tags;
