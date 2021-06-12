import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { blog, main_content, header } from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          fixed(width: 750) {
            width
            height
            src
          }
        }
      }
    }
  }
`

function Blogpost(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = "test"
        const url = props.data.contentfulBlogPost.body.references[0].fixed.src
        return <img src={url} alt={alt} />
      },
    },
  }

  return (
    <div>
      <Layout>
        <div className={blog}>
          <div className={header}>
          <h1> {props.data.contentfulBlogPost.title}</h1>
          <p> {props.data.contentfulBlogPost.publishedDate}</p>
          </div>
          <div className={main_content}>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
          </div>
          {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options))} */}
        </div>
      </Layout>
    </div>
  )
}

export default Blogpost
