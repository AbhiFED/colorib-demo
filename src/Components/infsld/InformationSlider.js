import React, { useEffect, useState } from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const sliderImages = [
  {
    id: 1,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
    alt: "Image 1",
    label: "Cashmere Tank + Bag",
    hiddenContent: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 2,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
    alt: "Image 2",
    label: "Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 3,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
    alt: "Image 3",
    label: " Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 4,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
    alt: "Image 3",
    label: "Cashmere Tank + Bag ",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
];
const InformationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previndex) =>
        previndex === sliderImages.lenghth - 1 ? 0 : previndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 114px",
          //   backgroundColor: "red",
          padding: "0px 25px",
          borderBottom: "1px solid pink",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontFamily: "'jost' , sans-serif", padding: "25px 10px" }}
          >
            Trending This Week
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Link
            href="#"
            sx={{
              padding: "35px 10px",
              textDecoration: "none",
              color: "black",
              borderBottom: "4px solid transparent",
              "&:hover": {
                borderBottom: "4px solid red",
              },
            }}
          >
            Men
          </Link>
          <Link
            href="#"
            sx={{
              padding: "35px 10px",
              textDecoration: "none",
              color: "black",
              "&:hover": {
                borderBottom: "4px solid red",
              },
            }}
          >
            Women
          </Link>
          <Link
            href="#"
            sx={{
              padding: "35px 10px",
              textDecoration: "none",
              color: "black",
              "&:hover": {
                borderBottom: "4px solid red",
              },
            }}
          >
            Baby
          </Link>
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              padding: "35px 10px",
              color: "black",
              "&:hover": {
                borderBottom: "4px solid red",
              },
            }}
          >
            Fashion
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          //   justifyContent: "center",
          width: "100%",
          position: "relative",
          marginLeft: "112px",
          marginRight: "112px",
          "&:hover .iconContainer": {
            opacity: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: `${sliderImages.length * 420}px`,
            animation: "slide 20s linear infinite",
          }}
        >
          {sliderImages.map((slides) => (
            <Box
              key={slides.id}
              sx={{
                position: "relative",
                // width: "420px",
                height: "400px",
                margin: "10px 5px",
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                //   "&:hover .overlayText": {
                //     opacity: 1,
                //   },
              }}
            >
              <img
                src={slides.src}
                alt={slides.alt}
                style={{
                  width: "100%",
                  height: "70%",
                  transition: "transform 0.3s ease-in-out",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  // position: "absolute",
                  // bottom: 0,
                  // left: 0,
                  // right: 0,
                  // backgroundColor: "rgba(0, 0, 0, 0)",
                  // color: "White",
                  // fontSize: "24px",
                  // display: "inline-block",
                  padding: "10px",
                  textAlign: "center",
                  // opacity: 1,
                  // transition: "opacity 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "'jost' , sans-serif" }}
                >
                  {slides.label}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'jost' , sans-serif",
                    textDecoration: "linethrough",
                    color: "grey",
                  }}
                >
                  {slides.Mrp}
                </Typography>
                <Typography sx={{ fontFamily: "'jost' , sans-serif" }}>
                  {slides.saleprice}
                </Typography>
              </Box>
              <Stack
                direction="row"
                className="iconContainer"
                sx={{
                  position: "absolute",
                  justifyContent: "center",
                  bottom: "10px",
                  left: "0",
                  right: "0",
                  display: "flex",
                  gap: "15px",
                  opacity: "1",
                  transition: "opacity 0.3s ease-in-out",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                {" "}
                <ShoppingBasketIcon
                  sx={{ color: "white", cursor: "pointer" }}
                />
                <SearchIcon sx={{ color: "white", cursor: "pointer" }} />
                <FavoriteBorderIcon
                  sx={{ color: "white", cursor: "pointer" }}
                />
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default InformationSlider;
