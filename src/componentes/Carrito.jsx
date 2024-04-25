import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Total } from './Total';
import NavBarCarrito from './NavBarCarrito';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductos } from '../redux/actions';
import CardCarrito from './CardCarrito';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';

export default function Carrito() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const compra = useSelector((state) => state.carrito)


    useEffect(() => {
        dispatch(getProductos());

    }, [dispatch]);


    function InvitadoRow() {
        return (
            <React.Fragment>

                {compra && compra.map((p) => {
                    return (
                        <Grid item xs={12} sm={8} md={6} lg={6} key={p._id}>
                            <CardCarrito id={p._id} name={p.name} cantidad={p.cantidad}  emprendimiento={p.emprendimiento} price={p.price} description={p.description} image={p.image} type={p.type} />
                        </Grid>
                    )
                })}

            </React.Fragment>
        )
    }

    return (
        <div>
            <body>
                <NavBarCarrito />

                <Box sx={{ flexGrow: 1 }} padding={8} style={{ background: theme.palette.background.default }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12} sm={8} md={9} container spacing={2}>
                            <InvitadoRow />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} >
                            <Typography align="center" gutterBottom variant="h4" color={'white'}>
                                <Total></Total>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </body>
            <Footer />
        </div>
    );
}