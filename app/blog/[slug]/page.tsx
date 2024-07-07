"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogService } from "@/services/blog.service";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Sidebar } from "@/components";

const BlogDetailPage = () => {
  const [detailBlog, setDetailBlog] = useState<BlogsType>();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      BlogService.getDetailBlog(slug as string).then((result) => {
        setDetailBlog(result);
      });
    }
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
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          paddingY: "50px",
          paddingX: "20px",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "40%",
            borderRadius: "10px",
          }}
          width={500}
          src={detailBlog?.image.url}
          alt={"nimadurlaer"}
        />
        <Box sx={{ marginY: "20px", paddingX: "20px" }}>
          <img
            src={detailBlog?.author?.avatar.url}
            alt=""
            width={60}
            height={60}
            style={{
              objectFit: "cover",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography sx={{ color: "white" }}>
              {detailBlog?.author?.name}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h4"
          sx={{
            marginTop: "20px",
            marginBottom: "10px",
            color: "white",
            fontSize: { xs: "24px" },
            fontWeight: "bold",
          }}
        >
          {detailBlog?.title}
        </Typography>
        <Typography sx={{ marginBottom: "20px", color: "white" }}>
          {detailBlog?.excerpt}
        </Typography>
        <Typography sx={{ color: "gray" }}>
          {detailBlog?.description.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
