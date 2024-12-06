import React, { useState } from "react";
import { Menu, MenuItem, Box, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Badge } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledLink = styled(Link)({
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    color: "red",
  },
});

const Hoverlink = styled(Link)({
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    color: "red",
  },
});

const Secondsection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.target.value);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const [blog, setBlog] = useState(null);
  const handleenter = (event) => {
    setBlog(event.currentTarget);
  };
  const handleleave = () => {
    setBlog(null);
  };
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "50px",
        borderRadius: "1px",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: { xs: "10px", md: "70px" },
      }}
    >
      <Grid
        container
        spacing={0}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={4} sm={2}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
              alt="logo"
              style={{ width: "200px", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
          <Box
            sx={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70px",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <StyledLink
              underline="none"
              href="#"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              Home
            </StyledLink>
            <StyledLink
              underline="none"
              href="#"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              Men
            </StyledLink>
            <StyledLink
              underline="none"
              href="#"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              Women
            </StyledLink>
            <StyledLink
              underline="none"
              href="#"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              <Badge
                badgeContent={"New"}
                color="error"
                sx={{ top: "0px", right: "-10px" }}
              >
                Baby Collection
              </Badge>
            </StyledLink>
            <StyledLink
              href="#"
              onMouseEnter={handleMouseEnter}
              underline="none"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              <span>Pages</span>
              <KeyboardArrowDownIcon />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                MenuListProps={{
                  onMouseEnter: handleMouseEnter,
                  onMouseLeave: handleMouseLeave,
                }}
              >
                <MenuItem onClick={handleMouseLeave}>Login</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Cart</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Product Details</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Product Checkout</MenuItem>
              </Menu>
            </StyledLink>
            <StyledLink
              href="#"
              onMouseEnter={handleenter}
              underline="none"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              Blog
              <Menu
                anchorEl={blog}
                open={Boolean(blog)}
                onClose={handleleave}
                MenuListProps={{
                  onMouseEnter: handleenter,
                  onMouseLeave: handleleave,
                }}
              >
                <MenuItem onClick={handleleave}>Blog</MenuItem>
                <MenuItem onClick={handleleave}>Blog Product</MenuItem>
                <MenuItem onClick={handleleave}>Product Price</MenuItem>
              </Menu>
            </StyledLink>
            <StyledLink
              underline="none"
              href="#"
              sx={{ color: "#292621", m: "0px 8px" }}
            >
              Contact
            </StyledLink>
          </Box>
        </Grid>

        <Grid item xs={8} sm={3}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"35px"}
            fontSize={"30px"}
          >
            <Hoverlink>
              <SearchIcon />
            </Hoverlink>
            <Hoverlink>
              <GoPerson />
            </Hoverlink>
            <Badge badgeContent={"1"} color="error">
              <Hoverlink>
                <HiOutlineShoppingCart />
              </Hoverlink>
            </Badge>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Secondsection;
