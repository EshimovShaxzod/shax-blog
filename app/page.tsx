'use client'
import { Content, Hero, Sidebar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { BlogService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {

   const [blogs, setBlogs] = useState<BlogsType[]>([]);

   useEffect(() => {
      BlogService.getAllPosts().then((result) => {
         setBlogs(result)
      })
   }, [])

  return (
     <Box sx={{width: "100%", flexDirection: "column", gap: "10px"}}>
        <Hero blogs={blogs} />
        <Box sx={{display:"flex", gapX: "10px", flexDirection: {xs: "column", md: "row"}}}>
         <Sidebar />
         <Content blogs={blogs} />
        </Box>
     </Box>
  );
}
