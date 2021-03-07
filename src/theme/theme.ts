import { Colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    backgroundColor: string;
  };
}

export const light: Theme = {
  colors: {
    primary: Colors.darkGray,
    secondary: Colors.lightGray,
    backgroundColor: Colors.lightViolet

  }
}
export const dark: Theme = {
  colors: {
    primary: Colors.lightGray,
    secondary: Colors.darkGray,
    backgroundColor: Colors.darkViolet
  }
}

export type ThemeType = typeof light | typeof dark;