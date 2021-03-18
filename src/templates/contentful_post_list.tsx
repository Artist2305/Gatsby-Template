import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import PostCard from '../components/PostCard';
import Pager from '../components/Pager';
import tw from 'twin.macro';

export const query = graphql`
query  {
  allContentfulContenfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        id
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
        title
        tags
        description
        postImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`
const BlogGrid = tw.div`
  grid md:grid-cols-12
`
const contentful_post_list: React.FC = (props) => {
  const posts = props.data.allContentfulContenfulBlogPost.edges;
  return (
    <Layout>
      <Head title="Blog pages from MD files!"
        description="This pages has beed created by using markdown files"
        keywords="gatsby, template, site, static, blog, markdown"
        author="Mateusz Szostek" />
      <h2 className="text-3xl font-semibold my-1">List of blog posts created by using contentful CMS</h2>
      <BlogGrid>
        <div className="sm:col-span-12 md:col-span-12 lg:col-span-8">
          {
            posts.map(s => <PostCard
              key={s.node.id}
              image={s.node.postImage.gatsbyImageData}
              slug={"/contentfulblog/" + s.node.slug}
              tags={s.node.tags}
              title={s.node.title}
              desc={s.node.description}
              date={s.node.publishedDate}
            />)
          }
        </div>
        <div className="sm:col-span-12 md:col-span-12 lg:col-span-4 bg-white bg-opacity-30 my-5 rounded-md ml-5 p-3">
          <h2>This is place for related posts!</h2>
          <p>Morbi volutpat molestie volutpat. Praesent maximus ante eros, et auctor felis mollis sed. Phasellus rutrum lacinia risus molestie dapibus. Vivamus a eleifend odio. Phasellus vel posuere eros. Fusce eu odio a metus mollis ultrices. Nullam eu quam nec odio lacinia consectetur ac et ligula.</p>
        </div>
      </BlogGrid>
      <Pager pageContext={props.pageContext} />
    </Layout>
  )
}

export default contentful_post_list;
