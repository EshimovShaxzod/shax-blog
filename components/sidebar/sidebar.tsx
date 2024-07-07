"use client";
import { Box, List, ListItem, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { BlogService } from "@/services/blog.service";
import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/category.interface";
import Link from "next/link";

const Sidebar = () => {
  const [lastBlogs, setLastBlogs] = useState<BlogsType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    BlogService.getLatestBlog().then((result) => {
      setLastBlogs(result);
    });
  }, []);

  useEffect(() => {
    BlogService.getCategories().then((result) => {
      setCategory(result);
    });
  }, []);

  return (
    <Box sx={{ width: { xs: "100%", md: "30%" }, padding: "20px" }}>
      <Box sx={{ position: "sticky", top: "80px" }}>
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "full",
            marginTop: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
              padding: "10px",
              color: "white",
              fontSize: "20px",
            }}
          >
            Latest Blog
          </Typography>
          <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {lastBlogs.map((data) => (
              <Link key={data.title} href={`/blog/${data.slug}`}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignItems: "start",
                    gap: "10px",
                  }}
                  className="max-[450px]:flex-col max-[450px]:w-full"
                >
                  <Image
                    src={data.image.url}
                    alt={data.title}
                    width={500}
                    height={100}
                    className="object-cover mx-auto h-[160px] max-[450px]:w-full w-[100%] rounded-[10px]"
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      className="cursor-pointer text-white"
                    >
                      {data.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <Image
                        src={data.author.avatar.url}
                        alt={data.title}
                        width={50}
                        height={50}
                        style={{ borderRadius: "50%" }}
                      />
                      <Box>
                        <Typography sx={{ color: "white" }}>
                          {data.author.name}
                        </Typography>
                        <Typography sx={{ color: "gray" }}>
                          {format(new Date(data.createdAt), "dd MMM yyyy")}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "full",
            marginTop: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
              padding: "10px",
              color: "white",
              fontSize: "20px",
            }}
          >
            Category
          </Typography>
          {category?.map((nav) => (
            <Fragment key={nav.label}>
              <Box component={"li"} key={nav.label}>
                <Link
                  href={`/category/${nav.slug}`}
                  className="flex items-center px-4 h-[40px] text-white hover:bg-black"
                >
                  {nav.label}
                </Link>
              </Box>
            </Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
