/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  
  siteMetadata: {
    title : `Twin Moneky with logo`,
    author: "Jane Doe"
    
  },
  plugins: [
    'gatsby-plugin-sass',
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name : 'src',
        path : `${__dirname}/src/`
      }
    }
    
  ]
 
}
