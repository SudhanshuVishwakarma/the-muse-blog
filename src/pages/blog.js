import React from 'react'
import Layout from '../components/layout'
import { graphql,useStaticQuery,Link } from 'gatsby'

import {posts,post} from './blog.module.scss'
const Blog = () => {

    const data = useStaticQuery(graphql`
       
        query{
            allContentfulBlogPost(sort: {fields:publishedDate, order : DESC}) {
            edges{
                node{
                    title,
                    slug,
                    publishedDate(formatString : "MMMM Do, YYYY")
                }
            }
            }
        }

    `)
    

    return (
        
            
           <Layout>
               <h1>Blog article goes here</h1>

               <ol className={posts}>
                   {
                       data.allContentfulBlogPost.edges.map( (p) =>{
                           return(
                               <li className={post}>
                                   <Link to={`/blog/${p.node.slug}`}>
                                   <h2>{p.node.title}</h2>
                                   <p>{p.node.publishedDate}</p>
                                   </Link>
                               </li>
                           )
                       })
                   }
               </ol>


           </Layout>
        
    )
}

export default Blog
