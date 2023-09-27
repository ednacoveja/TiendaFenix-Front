import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function FormaDePagoDialog({ open, onClose, onTransferencia, onEfectivo }) {
  const handleClose = () => {
    onClose();
  };

  const handleTransferencia = () => {
    onTransferencia();
    handleClose();
  };

  const handleEfectivo = () => {
    onEfectivo();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Forma de Pago</DialogTitle>
      <DialogContent>
        <Typography>
          ¿Cómo te gustaría pagar por tu pedido?
        </Typography>
        <div>
          <Button onClick={handleTransferencia}>Transferencia</Button>
          <Button onClick={handleEfectivo}>Efectivo al retirar</Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormaDePagoDialog;