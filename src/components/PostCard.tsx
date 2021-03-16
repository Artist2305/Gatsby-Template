import React from 'react';
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link as GatsbyLink} from 'gatsby';
import { useIntl, Link } from "gatsby-plugin-intl"

interface Props {
  image: any,
  tags: string,
  title: string,
  desc: string,
  date: string,
  slug: string,
}

const PostCard: React.FC<Props> =  ({tags, title, desc, date, slug, image }) => {
  return (
    <div>
      <div>
        <div className="h-48 w-56">
          <Img fluid={image} className="h-48 w-56"/>
        </div>
        <p>{tags}</p>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <p>{date}</p>
      <div>
        <Link to={slug}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;
