import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import Navbar from './Navbar';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductos } from '../redux/actions';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress'; // Importa el componente de carga

export default function Products() {
  const theme = useTheme(); 
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productos);
  
  // Estado para manejar la carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(getProductos());
      setLoading(false); // Cambia el estado a false cuando los productos se hayan cargado
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <main>
        <Navbar />
        <Box sx={{ flexGrow: 1 }} padding={10} style={{ background: theme.palette.background.default }}>
          {loading ? ( // Muestra el indicador de carga si loading es true
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2}>
              {allProducts && allProducts.map((p) => {
                return (
                  <Grid item xs={12} sm={6} md={5} lg={4} key={p._id}>
                    <Product id={p._id} name={p.name} cantidad={p.cantidad} emprendimiento={p.emprendimiento} price={p.price} description={p.description} image={p.image} type={p.type} />
                  </Grid>
                )
              })}
            </Grid>
          )}
        </Box>
      </main>
      <Footer />
    </div>
  );
}
