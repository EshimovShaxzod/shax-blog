"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogService } from "@/services/blog.service";
import { BlogsType } from "@/interfaces/blogs.interface";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Sidebar } from "@/components";

const CategoryDetailPage = () => {
  const [detailCategory, setDetailCategory] = useState<BlogsType[]>([]);

  const { slug } = useParams();

  useEffect(() => {
    BlogService.getCategoryBlog(slug as string).then((result) => {
      setDetailCategory(result);
    });
  }, [slug]);

  return (
    <Box
      sx={{
        display: "flex",
        gapX: "10px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Sidebar />
      <Box width={{ xs: "100%", md: "70%" }} sx={{ padding: "20px" }}>
        {detailCategory?.map((item) => (
          <Link key={item.title} href={`/blog/${item.slug}`}>
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                marginTop: "20px",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "50vh" }}>
                <Image
                  src={item.image.url}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  marginTop: "20px",
                  fontSize: { xs: "24px", md: "42px" },
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "gray" }}>{item.excerpt}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src={item.author.avatar.url}
                  alt={item.title}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
                <Box>
                  <Typography sx={{ color: "white" }}>
                    {item.author.name}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {format(new Date(item.createdAt), "dd MMM yyyy")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryDetailPage;
