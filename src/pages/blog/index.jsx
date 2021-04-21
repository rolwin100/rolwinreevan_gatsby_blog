import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';

const Blog = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Blog"
        description="I like blogging about various data engineer, web technologies and leadership. This blog expresses my views of various technologies
          and scenarios I have come across through my experience"
        path="blog"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Blog</h1>
        </div>
        <Row gutter={[20, 20]}>
          {
            data.allMediumPost.edges.map(({ node }) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col xs={24} sm={24} md={12} lg={8}>
                <PostCard data={node} />
              </Col>
            ))
          }
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 4) {
        edges {
          node {
            id
            title
            updatedAt
            virtuals {
              subtitle
              tags {
                name
              }
              totalClapCount
              previewImage {
                imageId
              }
            }
            medium_id
            slug
          }
        }
    }
  }
`;

export default Blog;
