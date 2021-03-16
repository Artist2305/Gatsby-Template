import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Img from "gatsby-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS, MARKS} from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"

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




const contentful_post: React.FC = (props) => {

  const post = props.data.contentfulContenfulBlogPost.blogPostContent;
  console.log(post)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        return <Img style={{width: "400px", height: "400px"}} fluid={node.data.target.fluid} />
      }
    }
  }

  const output = renderRichText(post, options)
  console.log(output);

  console.log(props);
  var richTextJSON = JSON.parse(props.data.contentfulContenfulBlogPost.blogPostContent.raw);
  console.log(richTextJSON)
  
  return (
      <Layout>
       <Head title={props.data.contentfulContenfulBlogPost.title}
        description={props.data.contentfulContenfulBlogPost.description}
        keywords={props.data.contentfulContenfulBlogPost.keywords}
        author={props.data.contentfulContenfulBlogPost.author} />
        
        <h1>{props.data.contentfulContenfulBlogPost.title}</h1>
        <h2> {props.data.contentfulContenfulBlogPost.publishedDate}</h2>
        {
          
          output
        }
        <h2>Written by {props.data.contentfulContenfulBlogPost.author}</h2>      
      </Layout>
    )
  }
  
  export default contentful_post;