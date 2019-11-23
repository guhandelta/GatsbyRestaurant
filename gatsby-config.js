module.exports = {
  siteMetadata: {
    title: `Gatsby Restaurant Website`,
    description: `Website for a restaurant built using Gatsby`,
    author: `Guhaprasaanth N`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "tlc2igeeffod",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "Hw2hw7QkUnkKqdEv5_moQs3jXCyXPe_Du-tCw5elzFw", //process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
