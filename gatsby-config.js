module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MAC Website`,
        short_name: `MAC`,
        start_url: `/`,
        background_color: `#f4e46c`,
        theme_color: `#f4e46c`,
        display: `standalone`,
        icon: `static/favicon/android-chrome-512x512.png`,
        icons: [
          {
            src: `favicon/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicon/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/events/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-162838301-1',
      },
    },
  ],
};
