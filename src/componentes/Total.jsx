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
    const [formaDePago, setFormaDePago] = useState(""); // Estado para almacenar la forma de pago seleccionada

    const handleTransferencia = () => {
        // Realiza las acciones necesarias para manejar la transferencia
        // ...

        // Establece la forma de pago seleccionada en "Transferencia"
        setFormaDePago("Transferencia");

        // Cierra el diálogo
        setDialogOpen(false);
        handleWhatsAppClick()
    };

    const handleEfectivo = () => {
        // Muestra un mensaje de confirmación y detalles para la recogida en efectivo.
        // ...

        // Establece la forma de pago seleccionada en "Efectivo al retirar"
        setFormaDePago("Efectivo al retirar");

        // Cierra el diálogo
        setDialogOpen(false);
        handleWhatsAppClick()
    };

    const handleWhatsAppClick = () => {
        // Crear un mensaje prellenado para WhatsApp con los nombres de los productos, el total y la forma de pago
        const productos = isLoggedIn ? compraLogin.map(item => item.name) : compra.map(item => item.name);
        const formaDePagoText = formaDePago ? `Forma de Pago: ${formaDePago}\n` : "";
        const mensaje = `¡Hola! Estoy interesado en comprar los siguientes productos:\n${productos.join('\n')}\n\n${formaDePagoText}Total: ${isLoggedIn ? accounting.formatMoney(sumaLogin, "$", 0) : accounting.formatMoney(suma, "$", 0)}.`;

        // Crear el enlace de WhatsApp con el mensaje y abrirlo en una nueva ventana
        const whatsappURL = `https://wa.me/543876305279/?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div style={clases.root}>
            <h5>Total items: {isLoggedIn ? compraLogin.length : compra.length}</h5>
            <h5>{isLoggedIn ? accounting.formatMoney(sumaLogin, "$", 0) : accounting.formatMoney(suma, "$", 0)}</h5>
            <Button style={clases.button} variant="contained" color='error' onClick={() => setDialogOpen(true)}>
                Contactar por WhatsApp
            </Button>
            <FormaDePagoDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onTransferencia={handleTransferencia}
                onEfectivo={handleEfectivo}
            />
        </div>
    );
};

