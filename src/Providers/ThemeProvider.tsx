"use client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/defaultThemes";

export const ThemeApplication: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
