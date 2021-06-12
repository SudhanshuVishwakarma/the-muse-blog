import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import { posts, post } from "./blog.module.scss"
const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  AOS.init()
  return (
    <Layout>
      <main>
        <div className="blog_header">
          <h4>Blog</h4>
        </div>
        <div className="main_blog">
          <ol data-aos="zoom-in" data-aos-duration="500" className={posts}>
            {data.allContentfulBlogPost.edges.map(p => {
              return (
                <li className={post}>
                  <Link to={`/blog/${p.node.slug}`}>
                    <h2>{p.node.title}</h2>
                    <p>{p.node.publishedDate}</p>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </main>
    </Layout>
  )
}

export default Blog
