'use client'
import { CategoryType } from "@/interfaces/category.interface";
import { BlogService } from "@/services/blog.service";
import { Box, ButtonGroup, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contacts() {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        BlogService.getCategories().then((result) => {
            setCategories(result)
        })
    }, [])

    return (
        <Box sx={{minHeight: "100vh"}}>
            <Box sx={{backgroundColor: "#141414", width: "80%", height:"40vh", marginX:"auto", marginY:"100px", borderRadius:"10px", boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",}}>
                <Typography variant="h2" sx={{textAlign: "center", paddingY:"20px", fontFamily: "cursive", color:"white"}}> All Category</Typography>
                    <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled button group"
                    sx={{width: "100%", display:"flex", justifyContent:"center", marginY:"10px"}}
                    >
                    {categories?.map((item) => (
                    <Link key={item.label} href={`/category/${item.slug}`} className="border-[1px] py-2 px-4 text-white hover:bg-[#232323]">{item.label}</Link>
                    ))}
                  </ButtonGroup>
            </Box>
        </Box>
    );
}