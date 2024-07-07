"use client";
import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { HeroProps } from "./hero.props";
import { format } from "date-fns";
import { calculatedTimeToRead } from "@/helpers/time.format";

const responsive = {
  mobile: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
};
const Hero = ({ blogs }: HeroProps) => {
  return (
    <Box sx={{ width: "100%", height: "70vh" }}>
      <Carousel responsive={responsive}>
        {blogs?.map((item) => (
          <List key={item.title} sx={{ position: "relative", height: "70vh" }}>
            <ListItem
              sx={{ width: "100%", position: "absolute", paddingX: "0" }}
            >
              <img
                src={item.image.url}
                alt={item.title}
                style={{ objectFit: "cover", width: "100%", height: "70vh" }}
              />
            </ListItem>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
            />
            <Box
              sx={{
                zIndex: "999",
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "100%", md: "70%" },
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "50px" },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "gray" }}>{item.excerpt}</Typography>
              <Box
                sx={{
                  zIndex: "999",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src={item.author.avatar.url}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt={item.title}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>{item.author.name}</Typography>
                  <Typography sx={{ color: "gray" }}>
                    {format(new Date(item.createdAt), "LLLL d, yyyy")} , {calculatedTimeToRead(item.description.text)} min read
                  </Typography>
                </Box>
              </Box>
            </Box>
          </List>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
