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
} from "@mui/material";
import { ShoppingCart, AccountCircle, Logout, Login, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
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

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          Pawoto
        </Typography>

        {/* Center Navbar Section - Visible on Desktop */}
        {!isMobile && (
          <div>
            <Button component={Link} to="/about" color="inherit">
              Về chúng tôi
            </Button>
            <Button component={Link} to="/products" color="inherit">
              Sản phẩm
            </Button>
            <Button component={Link} to="/emotion-station" color="inherit">
              Trạm cảm xúc
            </Button>
          </div>
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
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="Về chúng tôi" />
            </ListItem>
            <ListItem button component={Link} to="/products" onClick={toggleDrawer(false)}>
              <ListItemText primary="Sản phẩm" />
            </ListItem>
            <ListItem button component={Link} to="/emotion-station" onClick={toggleDrawer(false)}>
              <ListItemText primary="Trạm cảm xúc" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
