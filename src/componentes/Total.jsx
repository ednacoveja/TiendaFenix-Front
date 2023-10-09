import { Button } from '@mui/material';
import accounting from 'accounting';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormaDePagoDialog from './FormaDePagoDialog';

export const Total = () => {
    const compra = useSelector((state) => state.carrito);
    const suma = compra.reduce((accumulator, item) => accumulator + item.price, 0);
    const compraLogin = useSelector((state) => state.userCarrito);
    const sumaLogin = compraLogin.reduce((accumulator, item) => accumulator + item.price, 0);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const clases = {
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh"
        },
        button: {
            marginTop: "2rem"
        }
    }

    const [dialogOpen, setDialogOpen] = useState(false);


    const handleFormSubmit = (name, paymentMethod) => {

        handleWhatsAppClick(name, paymentMethod)

    };

    const handleWhatsAppClick = ({name, paymentMethod}) => {
        // Crear un mensaje prellenado para WhatsApp con los nombres de los productos, el total y la forma de pago
        const productos = compra.map(item => item.name);
        const formaDePagoText = paymentMethod ? `Forma de Pago: ${paymentMethod}\n` : "";
        const mensaje = `¡Hola! Mi nombre es ${name}. Estoy interesado en comprar los siguientes productos:\n\n${productos.join('\n')}\n\n${formaDePagoText}Total: ${accounting.formatMoney(suma, "$", 0)}.`;

        // Crear el enlace de WhatsApp con el mensaje y abrirlo en una nueva ventana
        const whatsappURL = `https://wa.me/543876305279/?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div style={clases.root}>
            <br />
            <br />
            <p><font size="4">{compra.length} productos seleccionados</font></p>
            <br />
            <h5>Total:{accounting.formatMoney(suma, "$", 0)}</h5>
            <Button style={clases.button} variant="contained" color='primary' onClick={() => setDialogOpen(true)}>
                Contactar por WhatsApp
            </Button>
            <FormaDePagoDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

