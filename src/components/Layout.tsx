import React from "react"
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import * as Theme from './../theme/theme';
import GlobalStyles from './../theme/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector } from '../state/ui';
import {
  LogoIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from '../components/icons/index';
import { Link } from 'gatsby';

const navLinks = [
  {id: 1, name: "Home", slug: "/Home"},
  {id: 2, name: "Blog", slug: "/Blog"},
  {id: 3, name: "Gallery", slug: "/Gallery"},
  {id: 4, name: "Cards", slug: "/Cards"}
]

const footerLinks = [
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
  flex flex-col container px-3 sm:px-10 
`;

const links = navLinks.map(s => <a key={s.id} href={s.slug}>{s.name}</a>);
const fotLinks = footerLinks.map(s => <a key={s.id} href={s.slug}>{s.name}</a>);

export default function Layout({ children }) {

  const { themeMode } = useSelector(uiSelector);
  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles/>
      <AppWrapper>
        <Wrapper>
    
        </Wrapper>
        <Wrapper>
          {children}
        </Wrapper>
        <Wrapper>

        </Wrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}