module.exports = {
  siteMetadata: {
    title: `Reno Conventions`,
    description: `Reno Conventions at the Row`,
    author: `Nguyen Le`,
  },
  plugins: [
    `react-reveal`,
    `react-use-scroll-position`,
    `react-burger-menu`,
    `react-images`,
    `slick-carousel`,
    `react-slick`,
    `react-parallax`,
    `react-intersection-observer`,
    `react-countup`,
    `react-modal-video`,
    `react-animated-slider`,
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
