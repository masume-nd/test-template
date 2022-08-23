import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header/Header";

interface ILayoutProps {
   children: React.ReactNode;
   toggleTheme: () => void;
   theme: "light" | "dark"
}
export default function Layout({ children, theme, toggleTheme }: ILayoutProps) {
   
   return (
      <Box sx={{ width: "100%", maxWidth: 1152, m: "auto" }}>
         <Header theme={theme} toggleTheme={toggleTheme}/>
         <Box
            sx={{
               backgroundColor: "background.paper",
               borderRadius: 3,
               p: 2,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               mt: 3,
            }}
         >
            <Box sx={{ width: "100%", maxWidth: 956 }}>{children}</Box>
         </Box>
      </Box>
   );
}
