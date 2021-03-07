import React from "react"
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import * as Theme from './../theme/theme';
import GlobalStyles from './../theme/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector } from '../state/ui';
import { Link }from "gatsby";
import {
  LogoIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from '../components/icons/index';

import {H1} from "./typography";

const navLinksData = [
  {id: 1, name: "Home", slug: "/Home"},
  {id: 2, name: "Blog", slug: "/Blog"},
  {id: 3, name: "Galleries", slug: "/Galleries"},
  {id: 4, name: "Grids", slug: "/Grids"},
  {id: 5, name: "Menus", slug: "/Menus"},
  {id: 6, name: "Footers", slug: "/Footers"},
]

const footerLinksData = [
  {id: 1, name: "Home", slug: "/Home"},
  {id: 2, name: "Blog", slug: "/Blog"},
  {id: 3, name: "Gallery", slug: "/Gallery"},
  {id: 4, name: "Cards", slug: "/Cards"},
  {id: 5, name: "About", slug: "/About"},
  {id: 6, name: "Contact", slug: "/Contact"},
  {id: 7, name: "Cooperation", slug: "/Cooperation"},
  {id: 8, name: "Help", slug: "/Help"},
  {id: 9, name: "Privacy", slug: "/Privacy"},
]

const AppWrapper = tw.div`
  flex flex-col items-center 
`
const Wrapper = tw.div`
  flex flex-col container px-3 sm:p-3
`;

const TopWrapper = tw(Wrapper)`
  bg-white bg-opacity-30 flex-row  rounded-md
`;

const NavLink = tw(Link)`
  mx-2
`;

const NavBar = tw.div`
  flex flex-row items-center h-full mx-5
`;
const Header = tw.div`
  flex flex-row items-center 
`;

const Logo = tw.div`
w-16 h-16 bg-indigo-300 mr-2
`;

const OptionsWrapper = tw.div`
  mx-2
`;
const LangLink = tw(Link)`

`;

const ThemeBtn = tw.button`
  font-semibold
`;

const navLinks = navLinksData.map(s => <NavLink key={s.id} to={s.slug}>{s.name}</NavLink>);
const fotLinks = footerLinksData.map(s => <NavLink key={s.id} to={s.slug}>{s.name}</NavLink>);

export default function Layout({ children }) {


  const { themeMode } = useSelector(uiSelector);
  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles/>
      <AppWrapper>
        <TopWrapper>
          <div className="flex-none w-42 h-16">
            <header>
              <Header>
                <Logo/>
                <H1>Gatsby Static <br/> Site Template</H1>
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
              <LangLink to="">EN</LangLink>/
              <LangLink to="">PL</LangLink>
            </OptionsWrapper>
            <OptionsWrapper>
              <ThemeBtn>Dark</ThemeBtn>/
              <ThemeBtn>Light</ThemeBtn>
            </OptionsWrapper>
          </div>
        </TopWrapper>
        <Wrapper>
          {children}
        </Wrapper>
        <Wrapper>

        </Wrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}