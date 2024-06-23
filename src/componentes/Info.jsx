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
import { useTheme } from '@mui/material/styles';



export default function Info() {
    const theme = useTheme();
    const allUsers = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    return (
        <div>
            <NavBarAbout />


            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        background: theme.palette.background.default,
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h2"
                            variant="h3"
                            align="center"
                            color="theme.palette.background.contrario"
                            gutterBottom
                        >
                            Tienda Fenix
                        </Typography>
                        <Typography variant="outlined" align="center" color="theme.palette.background.contrario" paragraph >
                            Promovemos emprendimientos salteños que realizan productos más amigables, naturales y nutritivos, recordando que los alimentos y la medicina vienen de la tierra. Para alimentar hábitos más concientes y amorosos siempre es paso a paso. Una recomendación simple para todo proceso es "tomar lo que te resuena y soltar lo que no".
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
                        bgcolor: "theme.palette.background.default",
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
                                color="theme.palette.background.contrario"
                                gutterBottom
                            >
                                ¿Cómo nos organizamos?
                            </Typography>
                            <Typography variant="outlined" align="center" color="theme.palette.background.contrario" paragraph >
                                Somos pequeños emprendedores apostando por productos más concientes y artesanales, por lo que los encargos en la página estarán listos para retirar de Miércoles a Viernes de 11 a 14hs en Balcarce 427. 
                            </Typography>
                        </Container>
                        <Container maxWidth="sm">
                            <Typography
                                component="h3"
                                variant="h4"
                                align="center"
                                color="theme.palette.background.contrario"
                                gutterBottom
                            >
                                Recomendaciones
                            </Typography>
                            <Typography variant="outlined" align="center" color="theme.palette.background.contrario" paragraph >
                                Te recomendamos que vengas con bolsa o lo que quieras para llevar tu compra. La idea es apostar por mejores productos sin tanto packaging. El origen de cada producto podrás encontrarlo en la página y en las redes de cada emprendimiento.
                            </Typography>
                        </Container>
                    </Grid>
                </Box>
                <Typography variant="h3" align="center" color="theme.palette.background.default" paragraph >
                    Emprendimientos
                </Typography>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {allUsers && allUsers .map((p) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={p._id}>
                                    <InfoCard id={p._id} nombre={p.nombre} description={p.description} image={p.image} instagram={p.instagram} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </div>

    );
}