import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl, Link } from "gatsby-plugin-intl"
import Img from 'gatsby-image';

const Galleries : React.FC = ({ }) => {

  const intl = useIntl();
  const data = useStaticQuery(graphql`
  query portfolioQuery {
    allFile(
      filter: {absolutePath: {regex: "/data/md_posts/"}, extension: {eq: "jpg"}}
      sort: {fields: name}
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
  `);

  const breakpointColumnsObj = {
    default: 4,
    1300: 3
  };
  return (
    <Layout>
      <Head 
          title="Galleries Examples"
          description="Awesome galleries examples!"
          keywords="gatsby, template, static, site, website, galleries "
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby GALLERIES page!</p>
        <div className="w-100prec flex col align-center">
        <div className="portfolio-container flex col justify-center">
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {data.allFile.edges.map(s => <Img key={s.id} alt={"Sample Work"} fluid={s.node.childImageSharp.fluid} />)}
            </Masonry>
          </SRLWrapper>
        </div>
        </div>
        
    </Layout>
  );
}

export default Galleries;