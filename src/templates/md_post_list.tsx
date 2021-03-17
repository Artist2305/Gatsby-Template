import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PostCard from '../components/PostCard';
import Pager from '../components/Pager';
import { useIntl, Link } from "gatsby-plugin-intl"
import tw from 'twin.macro';

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

const BlogGrid = tw.div`
  grid md:grid-cols-12
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

        <h1 className="text-2xl">List of blog posts created by using markdown files</h1>
        <BlogGrid>
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-8">
          {
            posts.map(s => <PostCard
            image={s.node.frontmatter.postImage.childImageSharp.fluid}
            slug={"/mdblog/" + s.node.frontmatter.slug}
            tags={s.node.frontmatter.tags}
            title={s.node.frontmatter.title}
            desc={s.node.frontmatter.shortDesc}
            date={s.node.frontmatter.date}
          />)
        }
          </div>
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-4 bg-white bg-opacity-30 my-5 rounded-md ml-5 p-3"> 
            <h2>This is place for related posts!</h2>
            <p>Morbi volutpat molestie volutpat. Praesent maximus ante eros, et auctor felis mollis sed. Phasellus rutrum lacinia risus molestie dapibus. Vivamus a eleifend odio. Phasellus vel posuere eros. Fusce eu odio a metus mollis ultrices. Nullam eu quam nec odio lacinia consectetur ac et ligula.


</p>
          </div>
        </BlogGrid>
        <Pager pageContext={props.pageContext} />
      </Layout>
    )
  }
  
  export default Md_post_list;