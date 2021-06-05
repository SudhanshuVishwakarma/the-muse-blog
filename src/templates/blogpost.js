import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-html-renderer'
import {renderRichText} from "gatsby-source-contentful/rich-text" 
// export const query = graphql`
// query($slug:String!){
//     markdownRemark(fields: {slug: {eq: $slug}}){
//         frontmatter{
//             title
//             date
//         }
//         html
//     }
// }
// `

export const query = graphql`
query($slug:String!) {
    contentfulBlogPost(slug : {eq: $slug}){
        title,
        publishedDate(formatString: "MMMM Do, YYYY")
        body{
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
            "embedded-asset-block": (node) => {
                const alt = "test"
                const url = props.data.contentfulBlogPost.body.references[0].fixed.src
                return <img src={url} alt={alt}/>
            }
        }
    }

    return (
        <div>

            <Layout>
                <h1> {props.data.contentfulBlogPost.title}</h1>
                <p> {props.data.contentfulBlogPost.publishedDate} </p>
                <div>{renderRichText(props.data.contentfulBlogPost.body,options)}</div>
                {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options))} */}
            </Layout>
            
        </div>
    )
}

export default Blogpost
