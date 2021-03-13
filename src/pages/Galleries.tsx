import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";

const Galleries : React.FC = ({ }) => {
  return (
    <Layout>
      <Head 
          title="Galleries Examples"
          description="Awesome galleries examples!"
          keywords="gatsby, template, static, site, website, galleries "
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby galleries page!</p>
    </Layout>
  );
}

export default Galleries;