import React from "react";
import { Box } from "@mui/material";
import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link, Divider } from "@mui/material";
import { styled } from "@mui/system";

const StyledLinks = styled(Link)({
  color: "grey",
  fontWeight: "bold",
  transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    color: "red",
    transform: "rotateY(180deg)",
  },
});

const FirstSection = () => {
  return (
    <Box
      sx={{ border: "1px solid whitesmoke", mx: { xs: "10px", md: "70px" } }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          fontSize: "14px",
          maxWidth: "100%",
          mx: { xs: "5px", md: "85px" },
          height: "30px",
        }}
      >
        <Box aria-label="leftinfo" display={"flex"} gap={{ xs: 1, md: 2 }}>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            About Us
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            Privacy
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            FAQ
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            Careers
          </Link>
        </Box>
        <Box aria-label="rightinfo" display={"flex"} alignItems={"center"}>
          <Box display={"flex"} gap={"8px"}>
            <Link underline="none" href="#" sx={{ color: "#292621" }}>
              My Wishlist
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link underline="none" href="#" sx={{ color: "#292621" }}>
              Track Your Order
            </Link>
            <Divider orientation="vertical" flexItem />
          </Box>
          <Box display={"flex"} gap={"16px"} ml={"5px"}>
            <StyledLinks href="#">
              <FaFacebook />
            </StyledLinks>
            <StyledLinks href="#">
              <IoLogoInstagram />
            </StyledLinks>
            <StyledLinks href="#">
              <FaTwitter />
            </StyledLinks>
            <StyledLinks href="#">
              <FaLinkedinIn />
            </StyledLinks>
            <StyledLinks href="#">
              <FaYoutube />
            </StyledLinks>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
