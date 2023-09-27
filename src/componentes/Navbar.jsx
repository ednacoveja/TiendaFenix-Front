import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import { Link } from "react-router-dom"
import { useStateValue } from "../redux/stateProvider"



export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black", boxShadow: "10px 0.7px grey" }} >
        <Toolbar >
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
                src="logoIntenso.png"
                alt="Logo"
              />
            </IconButton>
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"#fff3e0"}
          >
            Fenix
          </Typography>

          <Button color="inherit" component="div">Logout</Button>
          <Link to="/carrito">
            <IconButton aria-label='show cart items' color="inherit">
              <Badge badgeContent={basket?.length} color='error' max={99}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}

              >
                <AddShoppingCart fontSize="large"></AddShoppingCart>
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}