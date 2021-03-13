import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import { useStaticQuery, graphql } from 'gatsby';

const Home : React.FC = ({ }) => {
  return (
    <Layout>
        <Head 
          title="Gatsby + Typescript + Tailwind CSS + Styled-Components"
          description="This awesome gatsby starter template!"
          keywords="gatsby, template, static, site, website "
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby static site template!</p>
    </Layout>
  );
}

export default Home;