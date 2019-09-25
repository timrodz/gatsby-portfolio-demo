module.exports = {
  plugins: [
    'gatsby-plugin-sharp', // Image optimization
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      }
    },
    'gatsby-transformer-json'
  ]
}