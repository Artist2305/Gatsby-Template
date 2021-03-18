import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"


export const query = graphql`
query ($slug: String!) {
  contentfulContenfulBlogPost(slug: {eq: $slug}) {
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
        title 
        description
        keywords
        author
        tags
        blogPostContent {
          raw
          references {
            ... on ContentfulAsset{
              __typename
              contentful_id
							gatsbyImageData(layout: FULL_WIDTH)
          	}
          }
        }
  }
}`




const contentful_post: React.FC = (props) => {
  const post = props.data.contentfulContenfulBlogPost.blogPostContent;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return <GatsbyImage alt="Contentful post image" style={{ width: "100%", height: "600px" }} image={node.data.target.gatsbyImageData} />
      }
    }
  }
  const output = renderRichText(post, options)
  return (
    <Layout>
      <Head title={props.data.contentfulContenfulBlogPost.title}
        description={props.data.contentfulContenfulBlogPost.description}
        keywords={props.data.contentfulContenfulBlogPost.keywords}
        author={props.data.contentfulContenfulBlogPost.author} />

      <h2 className="text-3xl font-semibold my-1">{props.data.contentfulContenfulBlogPost.title}</h2>
      <p className="font-semibold mb-2"> {props.data.contentfulContenfulBlogPost.publishedDate}</p>
      <div className="blog-post-content rounded-md bg-white bg-opacity-30 p-5">
        {
          output
        }
      </div>
    </Layout>
  )
}

export default contentful_post;
