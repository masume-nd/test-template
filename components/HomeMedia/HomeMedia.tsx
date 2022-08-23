import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";
import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function HomeMedia() {
   return (
      <>
         <Box
            sx={{
               display: "block",
               mt: 5,
               minHeight: "517px",
            }}
         >
            <img
               style={{
                  borderRadius: 20,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
               }}
               src="https://picsum.photos/1000/600"
            />
           
         </Box>
         <Box sx={{ mt: 2 }}>
            <Typography
               sx={{
                  fontWeight: "400px",
                  fontSize: "20px",
                  lineHeight: "23.44px",
               }}
               variant="caption"
            >
               شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات
               دارای زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است. خود
               میرامار به عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که
               پرتغالی ها از مناطق همسایه آن را دوست دارند. با این حال ، این
               ساحل هنوز به عنوان یک مقصد گردشگری بین المللی چندان مشهور نشده
               است ، که به بازدیدکنندگانش مکانی برای لذت بردن می دهد.
            </Typography>
            <Box sx={{ m: "auto", width: "200px", mt: 2 }}>
               <Link href="/about-us">
                  <Button variant="contained" sx={{ px: 4 }}>
                     درباره ما
                     <ArrowCircleLeftIcon
                        sx={{ mr: "5px", width: "13.33px", height: "13.33px" }}
                     />
                  </Button>
               </Link>
            </Box>
         </Box>
      </>
   );
}
