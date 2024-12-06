import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./Slider.css";

const Slider = () => {
  const images = [
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp",
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp",
  ];
  const [cii, setCii] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCii((prevIndex) => (prevIndex + 1) % images.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "700px",
        // border: "2px solid grey",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* left side animated text  */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          [cii % 2 === 0 ? "right":"left"]:"0",
          width: "100%",
          height: "50%",
          margin:'75px 20px',
          backgroundColor: "rgba(0,0,0,0)",
          color: "white",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {" "}
        <Box
          sx={{
            width: "25%",
            textAlign: "center",
            margin:  cii % 2 === 0 ? "100px 1100px" : "1100px 100px ",
            position: "absolute",
          }}
        >
          <Typography
            variant="h3"
            className="static-text"
            sx={{ fontFamily: " 'Clicker Script' , sans-serif", color: "red" }}
          >
            Fashion Sale
          </Typography>
          <Typography
            variant="h4"
            className="bouncing-text"
            mt={3}
            mb={2}
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: "500",
              color: "#292621",
            }}
          >
            Minimal Menz Style
          </Typography>
          <Typography
            variant="h6"
            className="slide-in-text"
            sx={{ color: "#74706B" }}
            letterSpacing={0.5}
          >
            Explore fashion fonts at MyFonts. Discover a world of captivating
            typography for your creative projects. Unleash your design potential
            today!
          </Typography>
          <Typography
            variant="h6"
            component={Button}
            color="white"
            bgcolor={"#292621"}
            className="slide-in-text"
            mt={5}
          >
            SHOP NOW
          </Typography>
        </Box>
      </Box>
      {/* image slider  */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${images[cii]})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export default Slider;
