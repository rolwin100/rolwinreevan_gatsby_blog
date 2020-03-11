import React from 'react'
import Header from '../../components/PageLayout/Header'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from 'antd'

import SidebarWrapper from '../../components/PageLayout/Sidebar'

const Blog =  ({data}) =>
  <Layout className='outerPadding'>
    <Layout className='container'>
      <Header />
      <SidebarWrapper>
        <>{console.log(data)}
        <pre>{JSON.stringify(data)}</pre>
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
