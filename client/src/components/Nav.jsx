import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import { ShoppingCart, AccountCircle, Logout, Login, Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "context/CartContext";
import { useUser } from "context/UserContext";
import { useTheme } from "@mui/material/styles";

const Nav = () => {
  const { cartTotal } = useCart();
  const { isLoggedIn, userData, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

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
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img src="logo.png" alt="Logo" style={{ height: 80, marginRight: 10 }} />
        </Box>

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
                    transform: location.pathname === item.path ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "bottom left",
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
                  Hồ sơ
                </MenuItem>
                <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>
                  Đơn hàng
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    handleMenuClose();
                  }}
                >
                  <Logout fontSize="small" sx={{ mr: 1 }} /> Đăng xuất
                </MenuItem>
              </Menu>
            </>
          )}

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
