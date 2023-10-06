import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
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
                            Surge a partir de la idea de promover emprendimientos norteños que realizan productos más amigables, naturales y nutritivos, recordando que los alimentos y la medicina vienen de la tierra. Para alimentar hábitos más concientes y amorosos siempre es paso a paso...una recomendacion simple para todo proceso es "tomar lo que te resuena y dejar lo que no".
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
                                component="h2"
                                variant="h3"
                                align="center"
                                color="white"
                                gutterBottom
                            >
                                ¿Cómo nos organizamos?
                            </Typography>
                            <Typography variant="outline" align="center" color="white" paragraph >
                                Somos pequeños emprendedores apostando por productos más concientes y artesanales, por lo que los encargos en la pagina son de domingo a jueves y la entrega son los sábados de 12 a 16 hs. Si haces un pedido el viernes o sabado, estará listo para el siguiente sábado. Proximamente podrás venir al local los domingos de 10 a 19 hs en el centro de Salta.
                            </Typography>
                        </Container>
                        <Container maxWidth="sm">
                            <Typography
                                component="h2"
                                variant="h3"
                                align="center"
                                color="white"
                                gutterBottom
                            >
                                Recomendaciones
                            </Typography>
                            <Typography variant="outline" align="center" color="white" paragraph >
                                Te recomendamos que al retirar tu pedido o si vienes a visitarnos los domingos, vengas con bolsa, mochila, caja o lo que tengas para poder llevar tus compras. La idea es apostar por mejores productos sin tanto packaging. El origen de cada producto podrás encontrarlo en nuestro catálogo impreso en el local o en las redes de cada emprendimiento.
                            </Typography>
                        </Container>
                    </Grid>
                </Box>
                <Typography variant="h3" align="center" color="black" paragraph >
                    Productores
                </Typography>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}


                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a href="https://www.instagram.com/fenixcosmetica/" target="_blank" rel="noopener noreferrer"><Button variant="outline" color="inherit">

                                            <InstagramIcon style={{ color: pink[500] }} />

                                        </Button></a>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer></Footer>
            {/* End footer */}
        </ThemeProvider>
    );
}