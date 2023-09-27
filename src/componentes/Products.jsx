import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import Navbar from './Navbar';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductos,getUserLoged } from '../redux/actions';


export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productos);
  const userLoged = useSelector((state) => state.UserLoged);

  useEffect(() => {
    dispatch(getProductos())
    dispatch(getUserLoged ())
  }, [dispatch]);

  return (
    <body>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} padding={10} style={{ backgroundColor: "black" }}>
        <Grid container spacing={2}>
          {allProducts && allProducts.map((p) => {
            return (
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <Product id={p._id} name={p.name} rating={p.rating} price={p.price} description={p.description} image={p.image} type={p.type} userLoged={userLoged}/>
              </Grid>
            )
          })}
        </Grid>
      </Box>

    </body>
  );
}
