import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "../components/Button/Button";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Skeleton from "@mui/material/Skeleton";
import { fontWeight } from "@mui/system";
export default function AboutUs() {
   const [imageLoaded, setImageLoaded] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         setImageLoaded(true);
      }, 2000);
   }, []);
   return (
      <Box display="flex" flexDirection="column">
         <Box
            sx={{
               display: "flex",
               gap: "26px",
            }}
         >
            <Box
               sx={{
                  mt: 5,
                  width: 461,
                  height: 517,
                  flexShrink: 0,
               }}
            >
               <img
                  style={{
                     display: imageLoaded ? "block" : "none",
                     borderRadius: "98px",
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  src="https://picsum.photos/500/600"
               />
               {!imageLoaded && (
                  <Skeleton
                     sx={{ borderRadius: "98px" }}
                     variant="rectangular"
                     width={461}
                     height={517}
                  />
               )}
            </Box>
            <Box
               sx={{
                  mt: 2,
                  alignSelf: "flex-end",
               }}
            >
               <Typography
                  variant="h2"
                  sx={{
                     fontSize: "32px",
                     fontWeight: "700px",
                     lineHeight: "50px",
                     textAlign: "center",
                  }}
               >
                  درباره ما
               </Typography>
               <Typography
                  sx={{
                     fontWeight: "400px",
                     fontSize: "24px",
                     lineHeight: "48px",
                     textAlign: "justify",
                  }}
                  variant="caption"
               >
                  نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی
                  صفحه درباره ما یا همان About Us است. اکثر افراد در این بخش
                  مطالبی طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و
                  ناقص قرار میدهند که میتواند اعتبار سایت یا شرکت شما را زیر
                  سوال ببرد.
               </Typography>
            </Box>
         </Box>
         <Box
            sx={{
               alignSelf: "center",
               width: "200px",
               margin: "auto",
               marginTop: "204px",
               marginBottom:"46px"
            }}
         >
            <Link href="/">
               <Button variant="outlined" sx={{ width: "130px" }}>
                  <ArrowCircleRightIcon
                     sx={{ ml: 1, width: "13.33px", height: "13.33px" }}
                  />
                  صفحه اصلی
               </Button>
            </Link>
         </Box>
      </Box>
   );
}
