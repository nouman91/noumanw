import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Testimonails from "../components/testimonials"

class PageTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description =
      pageDescription !== null ? pageDescription : "Nouman Waheed's blog"

    return (
      <Layout location={this.props.location} title={title}>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <div className="container">
          <div className="page-template">
            <h1>About Me</h1>
            <article>
              {/* <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
                color: 'var(--textTitle)'
              }}
            >
              {page.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {page.frontmatter.date}
            </p>
          </header> */}
              <section dangerouslySetInnerHTML={{ __html: page.html }} />
              <div>
                <h2>Some More Words About Me</h2>
                <Testimonails />
              </div>
              <br />
              {/* <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer> */}
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
