const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const {  createNodeField } = actions
    if(node.internal.type == "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath,'.md')
        
        createNodeField({
            node,
            name : 'slug',
            value : slug
        })

        
    }
    }

    module.exports.createPages = async({graphql , actions}) =>{
        const {createPage} = actions

        const blogtemplate = path.resolve('./src/templates/blogpost.js')

        const res =  await graphql(`
            query{
                allMarkdownRemark{
                    edges{
                        node{
                            fields{
                                slug
                            }
                        }
                    }
                }
            }
        `)

        res.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                component:blogtemplate,
                path:`/blog/${edge.node.fields.slug}`,
                context:{
                    slug: edge.node.fields.slug
                }
            })            
        });
        
    }

    
    // Transform the new node here and create a new node or
    // create a new node field.
  