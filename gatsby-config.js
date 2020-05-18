/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require('./config');
const plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    // Data used by some gatsby plugins
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins,
};
