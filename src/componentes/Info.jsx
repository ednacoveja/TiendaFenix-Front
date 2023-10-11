import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBarAbout from './NavBarAbout';
import Footer from './Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { green, pink } from '@mui/material/colors';
import InfoCard from "./InfoCard";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions';
import { useEffect } from "react";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    const allUsers = useSelector((state) => state.users);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUser())
    }, [dispatch]);
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBarAbout />
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'black',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h2"
                            variant="h3"
                            align="center"
                            color="white"
                            gutterBottom
                        >
                            Tienda Fenix
                        </Typography>
                        <Typography variant="outline" align="center" color="white" paragraph >
                            Surge a partir de la idea de promover emprendimientos norteños que realizan productos más amigables, naturales y nutritivos, recordando que los alimentos y la medicina vienen de la tierra. Para alimentar hábitos más concientes y amorosos siempre es paso a paso...una recomendación simple para todo proceso es "tomar lo que te resuena y soltar lo que no".
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <a href="https://wa.me/543876305279" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="inherit" >
                                <WhatsAppIcon style={{ color: green[500] }} /></Button></a>
                            <a href="https://www.instagram.com/fenixcosmetica/" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="inherit">

                                <InstagramIcon style={{ color: pink[500] }} />
                            </Button></a>
                        </Stack>
                    </Container>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'black',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Grid container spacing={2}>
                        <Container maxWidth="sm">
                            <Typography
                                component="h3"
                                variant="h4"
                                align="center"
                                color="white"
                                gutterBottom
                            >
                                ¿Cómo nos organizamos?
                            </Typography>
                            <Typography variant="outline" align="center" color="white" paragraph >
                                Somos pequeños emprendedores apostando por productos más concientes y artesanales, por lo que los encargos en la página son de domingo a miércoles y estarán listos para retirar el sábado de 12 a 16 hs. Si haces un pedido de jueves a sábado, se retira el siguiente sábado. Próximamente podrás venir a nuestro local en el centro de Salta.
                            </Typography>
                        </Container>
                        <Container maxWidth="sm">
                            <Typography
                                component="h3"
                                variant="h4"
                                align="center"
                                color="white"
                                gutterBottom
                            >
                                Recomendaciones
                            </Typography>
                            <Typography variant="outline" align="center" color="white" paragraph >
                                Te recomendamos que vengas con bolsa, mochila, caja o lo que tengas para poder llevar tus compras. La idea es apostar por mejores productos sin tanto packaging. El origen de cada producto podrás encontrarlo en nuestro catálogo impreso en el local o en las redes de cada emprendimiento.
                            </Typography>
                        </Container>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography
                            component="h3"
                            variant="h4"
                            align="center"
                            color="white"
                            gutterBottom
                        >
                            Descuentos
                        </Typography>
                        <Typography variant="outline" align="center" color="white" paragraph >
                            Si traes +3 frascos de vidrio con tapa, te regalamos un jabón de glicerina y manteca de karité.
                            Si traes +5 frascos, tenés un 5% de descuento en tu compra.
                        </Typography>
                    </Container>
                </Box>
                <Typography variant="h3" align="center" color="black" paragraph >
                    Productores
                </Typography>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}


                    <Grid container spacing={4}>
                        {allUsers && allUsers.map((p) => {
                            return (
                                <Grid item xs={12} sm={6} md={4}>
                                    <InfoCard id={p._id} nombre={p.nombre} description={p.description} image={p.image} instagram={p.instagram} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer></Footer>
            {/* End footer */}
        </ThemeProvider>
    );
}