import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import PersonIcon from "@mui/icons-material/Person";
import AntSwitch from "../Switch/Switch";
import Stack from "@mui/material/Stack";
import { Icon } from "@mui/material";

export default function HomeHeader({ theme, toggleTheme }: any) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar
            position="static"
            sx={{
               backgroundColor: "background.paper",
               borderRadius: 3,
               boxShadow: 0,
               mx: "auto",
               mt: 2,
            }}
         >
            <Toolbar>
               <Typography variant="h6" sx={{ mr: 5, fontSize: 16 }}>
                  <Link href="/about-us">درباره ما</Link>
               </Typography>
               <Typography variant="h6" sx={{ mr: 5, fontSize: 16 }}>
                  <Link href="/">صفحه نخست</Link>
               </Typography>
               <Stack
                  sx={{
                     ml: 2,
                     mr: "auto",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
                  direction="row"
                  spacing={1}
                  alignItems="center"
               >
                  <WbSunnyIcon
                     sx={{
                        color: "#ffcb00",
                        width: "17.31",
                        height: "20px",
                        ml: "9px",
                     }}
                  />

                  <AntSwitch
                     inputProps={{ "aria-label": "ant design" }}
                     onChange={toggleTheme}
                     checked={theme === "light"}
                  />

                  <Brightness3Icon
                     sx={{
                        color: "black",
                        width: "13px",
                        height: "20px",
                        ml: "9px",
                        mr: "10px",
                     }}
                  />
               </Stack>
               <Typography variant="button">
                  <Button sx={{ px: 6 }} variant="contained">
                     ورود
                  </Button>
               </Typography>
               <Typography variant="button">
                  <Button variant="outlined" sx={{ mr: 2, px: 4 }}>
                     <PersonIcon
                        sx={{ width: "13.33px", height: "13.33px", ml: "5px" }}
                     />
                     ثبت نام
                  </Button>
               </Typography>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
