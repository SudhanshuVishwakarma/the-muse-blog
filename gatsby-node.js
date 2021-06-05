const path = require('path')


    module.exports.createPages = async({graphql , actions}) =>{
        const {createPage} = actions

        const blogtemplate = path.resolve('./src/templates/blogpost.js')

        const res =  await graphql(`
            query{
                allContentfulBlogPost{
                    edges{
                        node{
                            slug
                        }
                    }
                }
            }
        `)

        res.data.allContentfulBlogPost.edges.forEach((edge) => {
            createPage({
                component:blogtemplate,
                path:`/blog/${edge.node.slug}`,
                context:{
                    slug: edge.node.slug
                }
            })            
        });
        
    }

    
    // Transform the new node here and create a new node or
    // create a new node field.
  