import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PostCard from '../components/PostCard';
import Pager from '../components/Pager';
import { useIntl, Link } from "gatsby-plugin-intl"

export const query = graphql`
query  {
  allContentfulContenfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
        title
        tags
        description
        postImage {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
}`

const contentful_post_list: React.FC = (props) => {
   console.log(props)
  const posts = props.data.allContentfulContenfulBlogPost.edges;
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
    return (
      <Layout>
        <Head title="Blog pages from MD files!"
        description="This pages has beed created by using markdown files"
        keywords="gatsby, template, site, static, blog, markdown"
        author="Mateusz Szostek" />

        <h1>List of blog posts created by using contentful CMS</h1>
        {
          posts.map(s => <PostCard
            image={s.node.postImage.fluid}
            slug={"/contentfulblog/" + s.node.slug}
            tags={s.node.tags}
            title={s.node.title}
            desc={s.node.description}
            date={s.node.publishedDate}
          />)
        }
        <Pager pageContext={props.pageContext} />
      </Layout>
    )
  }
  
  export default contentful_post_list;