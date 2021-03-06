module.exports = ({ basePath = `/`, mdx = true }) => ({
    siteMetadata: {
        siteTitle: `MizanDev`,
        siteTitleAlt: `Web & App Development`,
        siteHeadline: `Amazing Web & App creation with React, Angular, Laravel or WordPress`,
        siteUrl: `https://mizan.dev`,
        siteDescription: `Hi, I'm Mizan. I create aesthetic web & app experience for companies of all sizes`,
        siteLanguage: `en`,
        siteImage: `/static/images/banner_512x512.png`,
        author: `@mizandev`,
        basePath,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sections`,
                path: `${__dirname}/src/sections`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Poppins']
                }
            }
        },
        mdx && {
            resolve: `gatsby-plugin-mdx`,
            options: {},
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
})
