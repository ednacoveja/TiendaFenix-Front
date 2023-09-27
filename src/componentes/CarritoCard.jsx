import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cyan, grey, teal } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting"
import { useStateValue } from "../redux/stateProvider"
import { actionTypes } from "../redux/reducer"



export default function CarritoCard({ product: { id, name, type, image, price, rating, description } }) {
const className={
    rating:{
        display:"flex"
    }
}
const [{basket},dispatch]=useStateValue()
const deleteProduct=()=>{
    dispatch({
        type:actionTypes.DELETE_ITEM,
        id,
    })
}
    return (
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "black"}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[800] }} aria-label="recipe">
                        <img
                            width={"30px"}
                            src="fenixBlackCircular.png"
                            alt="Logo"
                        />
                    </Avatar>
                }
                action={
                    <Typography
                        variant='h4'
                        color="white"
                    >
                       {accounting.formatMoney(price, "$",0)}
                    </Typography>
                }
                title={
                    <Typography
                        variant='h5'
                        color="white"
                    >
                        {name}
                    </Typography>
                }

                subheader={
                    <Typography
                        variant='h8'
                        color="white"
                    >
                        Stock
                    </Typography>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="img"
            />
            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                <div style={className.rating} >
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))
                    }
                </div>
                <IconButton>
                    <DeleteIcon fontSize='large' sx={{ color: 'white' }} onClick={deleteProduct}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}