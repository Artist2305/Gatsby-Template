module.exports = {
  siteMetadata: {
    title: "Static Website Starter | Gatsby + Typescript + Tailwind CSS + Styled-Components Starter",
    description: `Typescript + Tailwind CSS + Styled-Components + starter to kickoff your project.`,
    author: `Mateusz Szostek`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-styled-components",
    'gatsby-plugin-typescript',
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-7BTVPR3LLS",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/locales`,
        // supported language
        languages: [`en`, `pl`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      }
    },
  ],
};
