import React, { useState } from "react"
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import * as Theme from './../theme/theme';
import GlobalStyles from './../theme/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector } from '../state/ui';
import { Link as GatsbyLink } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl"
import {
  LogoIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon
} from '../components/icons/index';
import SimpleReactLightbox from 'simple-react-lightbox'

import { H1, H3 } from "./typography";

const TopWrapper = tw.div`
flex flex-col container px-3 lg:p-3 bg-purple-200 flex-row  rounded-md z-50 
fixed lg:relative 
`;

const NavBar = tw.div`
  hidden flex-row lg:(flex) items-center h-full mx-5
`;

const Logo = tw(LogoIcon)`
w-16 h-16 mr-2
`;

const FooterWrapper = styled.footer(() =>
  tw`w-full flex flex-row justify-center p-3`,
  css`
    background-color: ${({ theme }) => theme.colors.elementColor}; 
  `
);

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
    background-color: ${({ theme }) => theme.colors.formColor};
  `
);



export default function Layout({ children }) {
  const intl = useIntl()
  const { themeMode } = useSelector(uiSelector);

  let [menuOpen, setMenuOpen] = useState(false);

  function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }

  let handleClickMenuBtn = () => {
    console.log(getWidth());
    if (getWidth() < 1200) {
      if (!menuOpen) {
        setMenuOpen(true)
      }
      else {
        setMenuOpen(false);
      }
    }
  }

  const navLinksData = [
    { id: 1, name: intl.formatMessage({ id: "home" }), slug: "/Home" },
    { id: 2, name: intl.formatMessage({ id: "mdblog" }), slug: "/mdblog" },
    { id: 3, name: intl.formatMessage({ id: "contentfulblog" }), slug: "/contentfulblog" },
    { id: 4, name: intl.formatMessage({ id: "galleries" }), slug: "/Galleries" },
    { id: 5, name: intl.formatMessage({ id: "grids" }), slug: "/Grids" },
    { id: 6, name: intl.formatMessage({ id: "menus" }), slug: "/Menus" },
    { id: 7, name: intl.formatMessage({ id: "footers" }), slug: "/Footers" },
    { id: 8, name: intl.formatMessage({ id: "parallax" }), slug: "/ParallaxEffect" },
  ]

  const footerLinksData = [
    { id: 1, name: "Home", slug: "/Home" },
    { id: 2, name: "MD Blog", slug: "/mdblog" },
    { id: 3, name: "Contentful Blog", slug: "/contentfulblog" },
    { id: 4, name: "Gallery", slug: "/Gallery" },
    { id: 5, name: "Cards", slug: "/Cards" },
    { id: 6, name: "About", slug: "/About" },
    { id: 7, name: "Contact", slug: "/Contact" },
    { id: 8, name: "Cooperation", slug: "/Cooperation" },
    { id: 9, name: "Help", slug: "/Help" },
    { id: 10, name: "Privacy", slug: "/Privacy" },
  ]

  const navLinks = navLinksData.map(s => <Link key={s.id} to={s.slug} className="mx-2 text-sm my-1">{s.name}</Link>);
  const fotLinks = footerLinksData.map(s => <Link key={s.id} to={s.slug} className="text-base font-semibold"> {s.name} </Link>);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <SimpleReactLightbox>
        <GlobalStyles />
        <div className="flex flex-col items-center z-10 relative">
          <TopWrapper>
            <div className="flex-none w-42 h-16">
              <header>
                <div className="flex flex-row items-center ">
                  <Logo />
                  <H1>Gatsby Static <br /> Site Template</H1>
                </div>
              </header>
            </div>
            <div className="flex-grow h-16">
              <NavBar>
                {navLinks}
              </NavBar>
            </div>
            <div className="flex flex-row items-center w-42 h-16">
              <div className="mx-2">
                <div className="hidden lg:flex lg:flex-row">
                  <GatsbyLink to="/en">EN</GatsbyLink>/
                <GatsbyLink to="/pl">PL</GatsbyLink>
                </div>
              </div>
              <div className="mx-2">
                <div className="hidden lg:block">
                  <button className="font-semibold">{intl.formatMessage({ id: "dark" })}</button>/
              <button className="font-semibold">{intl.formatMessage({ id: "light" })}</button>
                </div>
              </div>
              <div className="mx-2">
                <div className="sticky top-4 right-4 cursor-pointer block lg:hidden">
                  <MenuIcon onClick={handleClickMenuBtn} />
                </div>
              </div>
            </div>
          </TopWrapper>
          <div className={"flex flex-col h-68 fixed bg-purple-200 container top-16 lg:invisible z-50 "
            + (menuOpen ? " " : "block hidden invisible")}>
            {navLinks}
            <div className="ml-2">
              <GatsbyLink to="/en">EN</GatsbyLink>/
              <GatsbyLink to="/pl">PL</GatsbyLink>
            </div>
            <div className="ml-2">
              <button className="font-semibold">{intl.formatMessage({ id: "dark" })}</button>/
            <button className="font-semibold">{intl.formatMessage({ id: "light" })}</button>
            </div>
          </div>
          <div className="container py-3 mt-16 lg:mt-0">
            {children}
          </div>
          <FooterWrapper>
            <div className="py-5 grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
              <form action="POST">
                <div className="flex flex-col">
                  <H3>{intl.formatMessage({ id: "formTitle" })}</H3>
                  <label className="py-1 font-semibold">{intl.formatMessage({ id: "name" })}</label>
                  <TextInput type="text" name="name" />
                  <label className="py-1 font-semibold">{intl.formatMessage({ id: "emailAddress" })}</label>
                  <TextInput type="text" name="email" />
                  <label className="py-1 font-semibold">{intl.formatMessage({ id: "message" })}</label>
                  <TextArea name="message" />
                  <Btn>{intl.formatMessage({ id: "send" })}</Btn>
                </div>
              </form>
              <div className="flex flex-col">
                <H3>{intl.formatMessage({ id: "siteMapTitle" })}</H3>
                <div className="grid py-2 grid-cols-2">
                  {fotLinks}
                </div>
              </div>
              <div className="flex flex-col">
                <H3>{intl.formatMessage({ id: "subscribeTitle" })}</H3>
                <label className="py-1 font-semibold">{intl.formatMessage({ id: "subscribe" })}</label>
                <TextInput type="text" name="email" />
                <Btn>{intl.formatMessage({ id: "subscribe" })}</Btn>
              </div>
              <div className="flex flex-col">
                <H3>{intl.formatMessage({ id: "socialMediaTitle" })}</H3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <FacebookIcon />
                    <LinkedinIcon />
                    <InstagramIcon />
                  </div>
                  <div className="flex flex-row gap-3">
                    <TwitterIcon />
                  </div>
                </div>
              </div>
            </div>
          </FooterWrapper>
        </div>
      </SimpleReactLightbox>
    </ThemeProvider>
  )
}