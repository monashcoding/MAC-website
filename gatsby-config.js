module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                ],
            },
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
    ]
};
