import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PostCard from '../components/PostCard';
import Pager from '../components/Pager';
import { useIntl, Link } from "gatsby-plugin-intl"

export const query = graphql`
query ($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: ASC}
    filter: {fileAbsolutePath: {regex: "/(data)/(md_posts)/"}}
    skip: $skip,
    limit: $limit
  ) {
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
          postImage {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
            name
          }
        }
      }
    }
  }
}
`

const Md_post_list: React.FC = (props) => {
   console.log(props)
  const posts = props.data.allMarkdownRemark.edges;
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
    return (
      <Layout>
        <Head title="Blog pages from MD files!"
        description="This pages has beed created by using markdown files"
        keywords="gatsby, template, site, static, blog, markdown"
        author="Mateusz Szostek" />

        <h1>List of blog posts created by using markdown files</h1>
        {
          posts.map(s => <PostCard
            image={s.node.frontmatter.postImage.childImageSharp.fluid}
            slug={"/mdblog/" + s.node.frontmatter.slug}
            tags={s.node.frontmatter.tags}
            title={s.node.frontmatter.title}
            desc={s.node.frontmatter.shortDesc}
            date={s.node.frontmatter.dateDate}
          />)
        }
        <Pager pageContext={props.pageContext} />
      </Layout>
    )
  }
  
  export default Md_post_list;