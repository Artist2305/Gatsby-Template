import React from "react"
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
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



const links = navLinks.map(s => <a key={s.id} href={s.slug}>{s.name}</a>);
const fotLinks = footerLinks.map(s => <a key={s.id} href={s.slug}>{s.name}</a>);
export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}