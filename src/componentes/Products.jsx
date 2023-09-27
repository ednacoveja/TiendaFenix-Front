import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from "../productsData"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }} padding={10} style={{ backgroundColor: "black" }}>
      <Grid container spacing={2}>
        {
          products.map(p => (
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <Product key={p.id} product={p} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
