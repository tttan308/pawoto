import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import { ShoppingCart, AccountCircle, Logout, Login, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCart } from "context/CartContext";
import { useUser } from "context/UserContext";
import { useTheme, keyframes, styled } from "@mui/material/styles";
import Typical from "react-typical";

// Keyframe animation for gradient text effect
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

// Styled component for the animated gradient text with a darker orange gradient
const GradientText = styled(Typography)({
  background: "linear-gradient(90deg, rgba(255,138,0,1), rgba(230,81,0,1), rgba(255,138,0,1))",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${gradientAnimation} 3s ease infinite`,
  fontWeight: "bold",
  position: "relative",
  textDecoration: "none",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: -2,
    left: 0,
    backgroundColor: "#FF6D00",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

const Nav = () => {
  const { cartTotal } = useCart();
  const { isLoggedIn, userData, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Define menu items with paths and labels
  const menuItems = [
    { label: "Trang chủ", path: "/about" },
    { label: "Sản phẩm", path: "/products" },
    { label: "Pawoto", path: "/pawoto" },
    { label: "Blog xanh", path: "/blog" },
    { label: "Trạm cảm xúc", path: "/emotion-station" },
  ];

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <GradientText variant="h6" component={Link} to="/" sx={{ textDecoration: "none" }}>
          <Typical steps={["Pawoto", 2000]} loop={1} wrapper="span" />
        </GradientText>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  px: 2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#FFA726",
                    transform: "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right-side Items */}
        <div>
          {!isLoggedIn ? (
            <>
              <IconButton component={Link} to="/login" color="primary">
                <Login />
              </IconButton>
              <IconButton component={Link} to="/cart" color="inherit">
                <Badge badgeContent={cartTotal} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </>
          ) : (
            <>
              <IconButton component={Link} to="/cart" color="inherit">
                <Badge badgeContent={cartTotal} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem disabled>{userData?.fullname}</MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>
                  Orders
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    handleMenuClose();
                  }}
                >
                  <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </>
          )}

          {/* Drawer Toggle for Mobile Menu */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                component={Link}
                to={item.path}
                key={index}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
