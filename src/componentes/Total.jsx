import { Button } from '@mui/material'
import accounting from 'accounting'
import React from 'react'
import{ getTotal }from "../redux/reducer"
import { useStateValue } from "../redux/stateProvider"


export const Total = () => {
    const clases = {
        root:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"20vh"
        },
        button:{
            marginTop:"2rem"
     
        }
    }
    const [{basket},dispatch]=useStateValue()
    return (
        <div style={clases.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5> {accounting.formatMoney(getTotal(basket), "$",0)}</h5>
            <Button style={clases.button} variant="contained" color='error'>Comprar</Button>
        </div>
    )
}
