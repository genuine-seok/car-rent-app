import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: DefaultTypography;
    color: DefaultColor;
  }

  export interface DefaultColor {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    tertiary: string;
  }

  export interface DefaultTypography {
    h1: () => string;
    h2: () => string;
    h3: () => string;
    h4: () => string;
    header: () => string;
    title: () => string;
    subTitle: () => string;
    section: () => string;
    label: () => string;
    body: () => string;
    caption: () => string;
    button: () => string;
  }

  export interface DefaultFontAttribute {
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
  }
}
