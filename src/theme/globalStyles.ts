import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-size: 18px;
    font-family: lato;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
`