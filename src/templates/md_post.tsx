import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Img from "gatsby-image"

export const query = graphql`
query ($slug: String, $postImage: String) {
  markdownRemark(fileAbsolutePath: {regex: "/(data)/(md_posts)/"}, frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      author
      date
      description
      id
      keywords
      slug
      title
      readTime
      postImage {
        name
        extension
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
      }
    }
    html
  }
  imageSharp(fluid: {originalName: {eq: $postImage}}) {
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
}`




const Md_post: React.FC = (props) => {
  console.log(props);
    return (
      <Layout>
       <Head title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
        keywords={props.data.markdownRemark.frontmatter.keywords}
        author={props.data.markdownRemark.frontmatter.author} />
        
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <h2> {props.data.markdownRemark.frontmatter.date} , {props.data.markdownRemark.frontmatter.readTime} of reading</h2>
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        <h2>Written by {props.data.markdownRemark.frontmatter.author}</h2>      
      </Layout>
    )
  }
  
  export default Md_post;