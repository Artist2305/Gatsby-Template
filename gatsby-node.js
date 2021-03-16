const path = require('path')
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve('./src/templates/md_post.tsx');

  const contentfulTemplate = path.resolve('./src/templates/contentful_post.tsx');

  //const contentfulTemplate = path.resolve('./src/templates/md_post.tsx');

  const cont = await graphql(`
  query MyQuery {
    allContentfulContenfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  const res = await graphql(`
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(data)/(md_posts)/"}}) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `)
  const resPost = await graphql(`
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(data)/(md_posts)/"}}) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            slug
            tags
            shortDesc
            id
            postImage{
              name
              extension
            }
          }
        }
      }
    }
  }
  
  `)
  paginate({
    createPage,
    items: resPost.data.allMarkdownRemark.edges,
    itemsPerPage: 5,
    pathPrefix: '/mdblog',
    component: path.resolve(`./src/templates/md_post_list.tsx`)
  });
  paginate({
    createPage,
    items: cont.data.allContentfulContenfulBlogPost.edges,
    itemsPerPage: 5,
    pathPrefix: '/contentfulblog',
    component: path.resolve(`./src/templates/contentful_post_list.tsx`)
  });

  cont.data.allContentfulContenfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: contentfulTemplate,
      path: `/contentfulblog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })

  resPost.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/mdblog/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
        postImage: edge.node.frontmatter.postImage.name + "." + edge.node.frontmatter.postImage.extension,
      }
    })
  })
}