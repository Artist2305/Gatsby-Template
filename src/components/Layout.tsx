import React from "react"
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import * as Theme from './../theme/theme';
import GlobalStyles from './../theme/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector } from '../state/ui';
import { Link as GatsbyLink}from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl"
import {
  LogoIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from '../components/icons/index';
import Background from '../components/Background';
import SimpleReactLightbox from 'simple-react-lightbox'
import {Spring} from 'react-spring/renderprops'
import Parallax from 'react-rellax';

import {H1, H3} from "./typography";

const AppWrapper = tw.div`
  flex flex-col items-center z-10 relative
`
const Wrapper = tw.div`
  flex flex-col container px-3 sm:p-3
`;
const ContentWrapper = tw.div`
  container py-3
`;

const TopWrapper = tw(Wrapper)`
  bg-white bg-opacity-30 flex-row  rounded-md
`;
const BottomWrapper = tw.div`
  py-5 grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container
`;
const LinksWrapper = tw.div`
  grid py-2 grid-cols-2 
`;
const SocialMediaWrapper = tw.div`
  flex flex-col gap-3
`
const SocialMediaRow = tw.div`
  flex flex-row gap-3
`

const NavLink = tw(Link)`
  mx-2
`;
const FooterLink = tw(Link)`
  text-base font-semibold
`;

const NavBar = tw.div`
  flex flex-row items-center h-full mx-5
`;
const Header = tw.div`
  flex flex-row items-center 
`;

const Logo = tw(LogoIcon)`
w-16 h-16 mr-2
`;

const OptionsWrapper = tw.div`
  mx-2
`;
const LangLink = tw(GatsbyLink)`

`;

const ThemeBtn = tw.button`
  font-semibold
`;

const FooterWrapper = styled.footer(() =>
  tw`w-full flex flex-row justify-center p-3`, 
  css`
    background-color: ${({ theme }) => theme.colors.elementColor}; 
  `
);

const FooterTitle  = tw.div`
flex flex-col 
`;

const Btn = tw.button`
  bg-gradient-to-t from-purple-400 to-indigo-400 inline-block w-28 h-8 my-2 text-white rounded-sm font-bold tracking-wider
`;

const TextInput = styled.input(() => 
  tw`rounded-sm p-1 outline-none`,
  css`
    background-color: ${({ theme }) => theme.colors.formColor};
  `
);
const TextArea = styled.textarea(() =>
  tw`rounded-sm p-1 outline-none`,
  css`
    background-color: ${({theme}) => theme.colors.formColor};
  `
);

const FormLabel = tw.label`
  py-1 font-semibold
`;


export default function Layout({ children }) {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  const { themeMode } = useSelector(uiSelector);

  const navLinksData = [
    {id: 1, name: intl.formatMessage({ id: "home" }), slug: "/Home"},
    {id: 2, name: intl.formatMessage({ id: "blog" }), slug: "/mdblog"},
    {id: 3, name: intl.formatMessage({ id: "blog" }), slug: "/contentfulblog"},
    {id: 4, name: intl.formatMessage({ id: "galleries" }), slug: "/Galleries"},
    {id: 5, name: intl.formatMessage({ id: "grids" }), slug: "/Grids"},
    {id: 6, name: intl.formatMessage({ id: "menus" }), slug: "/Menus"},
    {id: 7, name: intl.formatMessage({ id: "footers" }), slug: "/Footers"},
    {id: 8, name: intl.formatMessage({ id: "parallax" }), slug: "/ParallaxEffect"},
  ]
  
  const footerLinksData = [
    {id: 1, name: "Home", slug: "/Home"},
    {id: 2, name: "MD Blog", slug: "/mdblog"},
    {id: 3, name: "Contentful Blog", slug: "/contentfulblog"},
    {id: 4, name: "Gallery", slug: "/Gallery"},
    {id: 5, name: "Cards", slug: "/Cards"},
    {id: 6, name: "About", slug: "/About"},
    {id: 7, name: "Contact", slug: "/Contact"},
    {id: 8, name: "Cooperation", slug: "/Cooperation"},
    {id: 9, name: "Help", slug: "/Help"},
    {id: 10, name: "Privacy", slug: "/Privacy"},
  ]

  const navLinks = navLinksData.map(s => <NavLink key={s.id} to={s.slug}>{s.name}</NavLink>);
  const fotLinks = footerLinksData.map(s => <FooterLink key={s.id} to={s.slug}>{s.name}</FooterLink>);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <SimpleReactLightbox>
      <GlobalStyles/>
      
      <AppWrapper>
        <TopWrapper>
          <div className="flex-none w-42 h-16">
            <header>
              <Header>
                <Logo/>
                <Spring
                  from={{opacity:0}}
                  to={{opacity:1}}>
                  {props => <H1 style={props}>Gatsby Static <br/> Site Template</H1> }
                </Spring>
              </Header>
            </header>
          </div>
          <div className="flex-grow h-16">
            <NavBar>
              <nav>
                {navLinks}
              </nav>
            </NavBar>
          </div>
          <div className="flex flex-row items-center w-42 h-16 ">
            <OptionsWrapper>
              <LangLink to="/en">EN</LangLink>/
              <LangLink to="/pl">PL</LangLink>
            </OptionsWrapper>
            <OptionsWrapper>
              <ThemeBtn>{intl.formatMessage({ id: "dark" })}</ThemeBtn>/
              <ThemeBtn>{intl.formatMessage({ id: "light" })}</ThemeBtn>
            </OptionsWrapper>
          </div>
        </TopWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <FooterWrapper>
          <BottomWrapper>
          <form action="POST">
            <FooterTitle>
              
                <H3>{intl.formatMessage({id : "formTitle"})}</H3>
                <FormLabel>{intl.formatMessage({ id: "name"})}</FormLabel>
                <TextInput type="text" name="name"/>
                <FormLabel>{intl.formatMessage({ id: "emailAddress"})}</FormLabel>
                <TextInput type="text" name="email"/>
                <FormLabel>{intl.formatMessage({id : "message"})}</FormLabel>
                <TextArea name="message"/> 
                <Btn>{intl.formatMessage({id : "send"})}</Btn>
            </FooterTitle>
            </form>
            <FooterTitle>
              <H3>{intl.formatMessage({id : "siteMapTitle"})}</H3>
              <LinksWrapper>
                {fotLinks}
              </LinksWrapper>
              
            </FooterTitle>
            <FooterTitle>
              <H3>{intl.formatMessage({id : "subscribeTitle"})}</H3>
              <FormLabel>{intl.formatMessage({id : "subscribe"})}</FormLabel>
              <TextInput type="text" name="email"/>
              <Btn>{intl.formatMessage({id : "subscribe"})}</Btn>
            </FooterTitle>
            <FooterTitle>
              <H3>{intl.formatMessage({id : "socialMediaTitle"})}</H3>
              <SocialMediaWrapper>
                <SocialMediaRow>
                  <FacebookIcon/>
                  <LinkedinIcon/>
                  <InstagramIcon/>
                </SocialMediaRow>
                <SocialMediaRow>
                  <TwitterIcon/>
                </SocialMediaRow>
              </SocialMediaWrapper>
            </FooterTitle>
          </BottomWrapper>
        </FooterWrapper>
      </AppWrapper>
      </SimpleReactLightbox>
    </ThemeProvider>
  )
}