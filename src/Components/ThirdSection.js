import React from "react";
import { Box, Link } from "@mui/material";

const ThirdSection = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        textAlign: "center",
        height: "35px",
        margin: "5px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "16px", fontWeight: "400", margin: 0 }}>
        Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
        &nbsp;&nbsp;
        <Link
          href="#"
          sx={{
            color: "#CEBD9C",
            fontWeight: "500",
            fontSize: "20px",
            textDecoration: "underline",
            textDecorationThickness: "3px",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          Shop Now
        </Link>
      </p>
    </Box>
  );
};

export default ThirdSection;
