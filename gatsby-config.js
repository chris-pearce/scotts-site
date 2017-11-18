module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s6hj5d8j3nqc`,
        accessToken: `1e8fa0664f24f1f57446aa2168c5cca3cd1bc382cec3e980dd41f9c2d085c60a`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
