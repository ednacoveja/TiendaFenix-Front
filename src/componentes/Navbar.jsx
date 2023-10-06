import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge, MenuItem, Select } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Filtros from './Filtros';


export default function Navbar() {
  const compra = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function ALaHome(e) {
    e.preventDefault();
    navigate("/home");
  }

  async function ShoppingCart(e) {
    e.preventDefault();
    navigate("/carrito");
  }
  async function about(e) {
    e.preventDefault();
    navigate("/about");
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black", boxShadow: "10px 0.7px grey" }}>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <img
                width={"30px"}
                src={'images/logoRedondo.png'}
                alt="Logo"
              />
            </IconButton>
          </Link>
          <Typography sx={{ flexGrow: 1 }}>
            <Button color="inherit" component="button" variant="outline" onClick={(e) => {
              ALaHome(e);
            }}>Tienda </Button>
          </Typography>

          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Filtros />
          </Typography>
          <Typography>
            <Button color="inherit" component="button" variant="outline" onClick={(e) => {
              about(e);
            }}>Info</Button>
          </Typography>

          <IconButton aria-label='show cart items' color="inherit">
            <Badge badgeContent={compra.length} color='error' max={99}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <AddShoppingCart fontSize="large" onClick={(e) => { ShoppingCart(e) }}></AddShoppingCart>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
