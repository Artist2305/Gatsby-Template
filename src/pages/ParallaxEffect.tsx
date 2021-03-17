import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; 
import { useIntl, Link } from "gatsby-plugin-intl"
import {H1, H3} from "../components/typography";
import Parallax from 'react-rellax';


const Grid = tw.div`
  grid grid-cols-6 mb-20 gap-2
`;

const Card = styled.div((color) => 
  tw`w-full h-56 opacity-50 rounded-xl`,
  css`
  ${props => props.color && css`background-color: ${props => props.color};`}
  `)

const cardList = [
  {id: 1, color: "red", speed: 2},
  {id: 2, color: "blue", speed: -1},
  {id: 3, color: "crimson", speed: 6},
  {id: 4, color: "green", speed: -2},
  {id: 5, color: "cornflowerblue", speed: 1},
  {id: 6, color: "purple", speed: -1.5},
  {id: 7, color: "yellow", speed: -2},
  {id: 8, color: "lightgreen", speed: 7},
  {id: 9, color: "purple", speed: 6},
  {id: 10, color: "seagreen", speed: 2},
  {id: 11, color: "darkorange", speed: 1},
  {id: 12, color: "red", speed: 2},
  {id: 13, color: "blue", speed: -1},
  {id: 14, color: "crimson", speed: 6},
  {id: 15, color: "green", speed: -2},
  {id: 16, color: "cornflowerblue", speed: 1},
  {id: 17, color: "purple", speed: -1.5},
  {id: 18, color: "yellow", speed: -2},
  
]



const ParallaxEffect : React.FC = ({ }) => {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <Layout>
        <Head 
          title="Gatsby + Typescript + Tailwind CSS + Styled-Components"
          description="This awesome gatsby starter template!"
          keywords="gatsby, template, static, site, website "
          author="Mateusz Szostek" 
        />
        <Grid>
          {
            cardList.map(s => 
              <Parallax key={s.id} speed={s.speed}>
                <Card color={s.color}/>
              </Parallax >  
            )
          }
        </Grid>
    </Layout>
  );
}

export default ParallaxEffect;