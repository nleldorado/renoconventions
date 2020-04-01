module.exports = {
  siteMetadata: {
    title: `Reno Conventions`,
    description: `Reno Conventions at the Row`,
    author: `Nguyen Le`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // need authentication
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://ec2-34-217-206-28.us-west-2.compute.amazonaws.com/`,
        apiBase: `jsonapi`,
      },
    },
    // can use more than one drupal source to query data into gatsby
    //dev-renoconventions drupal demo site with content already created which is used to test graphql with gatsby
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-renoconventions.pantheonsite.io/`,
        // apiBase: `api`,
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reno-conventions`,
        short_name: `renoconventions`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/row.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
