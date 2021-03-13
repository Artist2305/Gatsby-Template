import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";

const Menus : React.FC = ({ }) => {
  return (
    <Layout>
       <Head 
          title="Menus Examples"
          description="Awesome menus examples!"
          keywords="gatsby, template, static, site, website, menu"
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby menus page!</p>
    </Layout>
  );
}

export default Menus;