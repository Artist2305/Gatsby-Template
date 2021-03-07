import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-size: 16px;
    font-family:  system-ui;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  h1{
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
`