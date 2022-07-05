module.exports = {
  siteMetadata: {
    title: "Summer Camp",
    titleTemplate: "%s · Subvisual",
    description: "An internship program at Subvisual.",
    url: "https://subvisual.com",
    image: "/meta.png",
    twitterUsername: "@subvisual",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./static/uploads",
        name: "uploads",
      },
    },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "faqs",
        path: "./content/faqs",
      },
      __key: "faqs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./content/projects",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "testimonials",
        path: "./content/testimonials",
      },
      __key: "testimonials",
    },
    // "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Summer Camp Subvisual`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
