import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface HeadProps {
  title: string,
  description: string,
  keywords: string,
  author: string
}

const Head: React.FC<HeadProps> = (props) => {

  const data = useStaticQuery(graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author
        description
        title
        keywords
      }
    }
  }
  
  `)
  return (
    
    <Helmet>
        {console.log(props.title)}
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title + ' | ' + props.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />

    </Helmet>
  )
}

export default Head;
