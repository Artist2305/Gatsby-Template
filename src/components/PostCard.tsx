import React from 'react';
import Img from 'gatsby-image'
import { Link } from "gatsby-plugin-intl"
import tw from 'twin.macro';
import { GatsbyImage } from "gatsby-plugin-image"

interface Props {
  image: any,
  tags: string,
  title: string,
  desc: string,
  date: string,
  slug: string,
}
const CardWrapper = tw.div`bg-white bg-opacity-30 my-5 p-4 rounded-md md:(flex flex-row) z-0`;
const Row = tw.div`
  md:(flex flex-row)`
const Col = tw.div`
  flex flex-col relative`
const Date = tw.p`
  uppercase mr-3 font-semibold`
const Tags = tw.p`
  uppercase text-purple-500 font-semibold`
const PostTitle = tw.h3`
  text-xl font-bold my-2`
const ReadMore = tw(Link)`
  text-blue-800 absolute -bottom-1`

const PostCard: React.FC<Props> = ({ tags, title, desc, date, slug, image }) => {
  return (
    <CardWrapper>
      <div className="h-56 w-100 md:h-48 md:w-56 md:mr-3">
        <GatsbyImage image={image} alt="Blog post image" className="h-56 w-100 md:h-48 md:w-56 rounded-md" />
      </div>
      <Col>
        <Row>
          <Date>{date}</Date>
          <Tags>{tags}</Tags>
        </Row>
        <PostTitle>{title}</PostTitle>
        <p className="mb-6">{desc}</p>
        <ReadMore to={slug}>Read</ReadMore>
      </Col>
    </CardWrapper>
  )
}

export default PostCard;
