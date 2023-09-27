import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CarritoCard from './CarritoCard';
import { Total } from './Total';
import { useStateValue } from "../redux/stateProvider"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Carrito() {

    const [{ basket }, dispatch] = useStateValue()

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={6}>
                        <CarritoCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        )
    }
    return (
        <Box sx={{ flexGrow: 1 }} padding={8} style={{ backgroundColor: "black" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant="h4" color={'white'}>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                    <Typography align="center" gutterBottom variant="h4" color={'white'}>
                        <Total></Total>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}