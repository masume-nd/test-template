import { PaletteMode } from "@mui/material";
export const getDesignTokens = (mode: PaletteMode) => ({
   // direction: "rtl",
   palette: {
      mode,
      ...(mode === "light"
         ? {
              // palette values for light mode
              background: {
                 default: "#F5F5F5",
                 paper: "#FFFFFF",
              },
           }
         : {
              // palette values for dark mode
              background: {
                 default: "#1E272E",
                 paper: "#2B343B",
              },
           }),
   },
});
