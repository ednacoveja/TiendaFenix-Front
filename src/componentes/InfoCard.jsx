import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';


export default function InfoCard({ id, nombre, description, image, instagram }) {
    const theme = useTheme();
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" color={"black"}>
                    {nombre}
                </Typography>
                <Typography color={"black"}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={instagram} target="_blank" rel="noopener noreferrer"><Button variant="outline" color="inherit">

                    <InstagramIcon style={{ color: pink[500] }} />

                </Button></a>

            </CardActions>
        </Card>
    );

}