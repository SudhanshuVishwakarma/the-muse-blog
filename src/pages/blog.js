import React from 'react'
import Layout from '../components/layout'
import { graphql,useStaticQuery } from 'gatsby'


const Blog = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                    }
                }
            }
        }
    `)
    //console.log(data)

    return (
        
            
           <Layout>
               <h1>Blog article goes here</h1>

               <ol>
                   {
                       data.allMarkdownRemark.edges.map( (p) =>{
                           return(
                               <li>
                                   <h2>{p.node.frontmatter.title}</h2>
                                   <p>{p.node.frontmatter.date}</p>
                               </li>
                           )
                       })
                   }
               </ol>


           </Layout>
        
    )
}

export default Blog
