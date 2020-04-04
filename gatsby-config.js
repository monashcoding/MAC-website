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
        'gatsby-plugin-netlify-cms'
    ]
};
