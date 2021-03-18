import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import tw from 'twin.macro'; 
import { useIntl, Link } from "gatsby-plugin-intl"
import {H1} from "../components/typography";

const HomeGrid = tw.div`
  grid grid-rows-1 grid-flow-col
`;

const Content = tw.div`
  col-span-3 p-5
  bg-white bg-opacity-30 rounded-md
`;

const ContentImg = tw.div`
  col-span-2
`

const Home : React.FC = ({ }) => {
  const intl = useIntl()
  return (
    <Layout>
        <Head 
          title="Gatsby + Typescript + Tailwind CSS + Styled-Components"
          description="This awesome gatsby starter template!"
          keywords="gatsby, template, static, site, website "
          author="Mateusz Szostek" 
        />

        <HomeGrid>
          <Content>
            <H1>This is awesome gatsby template!</H1>

            <p>{intl.formatMessage({ id: "homeContent1" })}</p>
            <p>{intl.formatMessage({ id: "homeContent2" })}</p>
            <p>{intl.formatMessage({ id: "homeContent3" })}</p>
            <p>{intl.formatMessage({ id: "homeContent4" })}</p>
            <p>{intl.formatMessage({ id: "homeContent5" })}</p>
            <p>{intl.formatMessage({ id: "homeContent6" })}</p>
            <p>{intl.formatMessage({ id: "homeContent7" })}</p>
            <p>{intl.formatMessage({ id: "homeContent8" })}</p>
            <p>{intl.formatMessage({ id: "homeContent9" })}</p>
            <p>{intl.formatMessage({ id: "homeContent10" })}</p>
            <p>{intl.formatMessage({ id: "homeContent11" })}</p>
            <p>{intl.formatMessage({ id: "homeContent12" })}</p>
            <p>{intl.formatMessage({ id: "homeContent13" })}</p>
            <p>{intl.formatMessage({ id: "homeContent14" })}</p>
            <p>{intl.formatMessage({ id: "homeContent15" })}</p>
            <p>{intl.formatMessage({ id: "homeContent16" })}</p>
            <p>{intl.formatMessage({ id: "homeContent17" })}</p>
            <p>{intl.formatMessage({ id: "homeContent18" })}</p>
           
          </Content>
          <ContentImg>

          </ContentImg>
        </HomeGrid>
    </Layout>
  );
}

export default Home;