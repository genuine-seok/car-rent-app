import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  typography: {
    h1: () => `
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.9rem;
    `,
    h2: () => `
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    `,
    h3: () => `
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    `,
    h4: () => `
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem;
    `,
    header: () => `
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    `,
    title: () => `
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.9rem;
    `,
    subTitle: () => `
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    `,
    section: () => `
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    `,
    label: () => `
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    `,
    body: () => `
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.7rem;
    `,
    caption: () => `
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.4rem;
    `,
    button: () => `
      font-size: .875rem;
      font-weight: 500;
      line-height: 1.7rem;
    `,
  },
  color: {
    white: "#FFF",
    black: "#000",
    primary: "#000000",
    secondary: "#D9D9D9",
    tertiary: "0094FF",
  },
};
