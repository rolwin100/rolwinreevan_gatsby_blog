import React from 'react'
import { Layout } from 'antd'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'

import 'prismjs/themes/prism-solarizedlight.css'
import './highlight-syntax.less'

const Post = ({ data }) => {
  const { html } = data.markdownRemark
  return <Layout className='outerPadding'>
    <Layout className='container'>
      <Header />
      <SidebarWrapper>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </SidebarWrapper>
    </Layout>
  </Layout>

}

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        path
        excerpt
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
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

export default Post