import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import type { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { PaletteMode } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import { getDesignTokens } from "../styles/theme/ThemeOptions";
import "../styles/globals.css";
import Layout from "../layout/Layout";
import GlobalStyles from "@mui/material/GlobalStyles";
interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(getDesignTokens("light"));

const MyApp: React.FC<MyAppProps> = (props) => {
   const [mode, setMode] = React.useState<PaletteMode>("light");
   const colorMode = React.useMemo(
      () => ({
         // The dark mode switch would invoke this method
         toggleColorMode: () => {
            setMode((prevMode: PaletteMode) =>
               prevMode === "light" ? "dark" : "light"
            );
         },
      }),
      []
   );

   // Update the theme only if the mode changes
   const theme = React.useMemo(
      () => createTheme(getDesignTokens(mode)),
      [mode]
   );

   const {
      Component,
      emotionCache = clientSideEmotionCache,
      pageProps,
   } = props;

   return (
      <CacheProvider value={emotionCache}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{ body: { background: "default" } }} />
            <Layout toggleTheme={colorMode.toggleColorMode} theme={mode}>
               <Component {...pageProps} />
            </Layout>
         </ThemeProvider>
      </CacheProvider>
   );
};

export default MyApp;
