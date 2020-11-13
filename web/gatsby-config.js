import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  pathPrefix: '/tachingon',
  siteMetadata: {
    title: `Taquería Tachingon`,
    siteUrl: 'https://taqueria.tachingon.net',
    description: 'The best Mexican food in Tampa!',
    twitter: '@TaqueriaTachingon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // {
    //   // this is the name of the plugin you are adding
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '4tjeljt4',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
