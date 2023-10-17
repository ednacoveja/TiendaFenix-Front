import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cyan, grey, teal } from '@mui/material/colors';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from "accounting"
import { useDispatch } from 'react-redux';
import { addToCarrito } from "../redux/actions"
import { useTheme } from '@mui/material/styles';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product({ id, name, description, image, type, price, emprendimiento,cantidad }) {
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme(); 

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch()

    const addToBasket = (id) => {
        dispatch(addToCarrito(id))
    }


    return (
        <Card sx={{ maxWidth: 345,  background: theme.palette.background.default }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[800] }} aria-label="recipe">
                        <img
                            width={"30px"}
                            src={'images/fenixBlackCircular.png'}
                            alt="Logo"
                        />
                    </Avatar>
                }

                title={
                    <Typography
                        variant='h6'
                        color='theme.palette.background.contrario'
                    >
                        {name}
                    </Typography>
                }

                subheader={
                    <Typography
                        variant='h8'
                        color='theme.palette.background.contrario'
                    >
                        {accounting.formatMoney(price, "$", 0)}
                    </Typography>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="body2" color="grey">
                    {type}

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to Cart" onClick={() => addToBasket(id)} >
                    <AddShoppingCart fontSize="large" sx={{ color: 'theme.palette.background.contrario' }} />
                </IconButton>
                <Typography variant="body2" color='theme.palette.background.contrario'>
                    {cantidad}
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <Typography variant="body2" color="grey" expand="none">
                        {emprendimiento.toUpperCase()}
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'theme.palette.background.contrario'}} />
                </ExpandMore>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color={'theme.palette.background.contrario'}>{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
