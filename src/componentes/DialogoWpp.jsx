import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, MenuItem, Select, FormControlLabel, Checkbox } from '@mui/material';

function FormaDePagoDialog({ open, onClose, onSubmit }) {
  const handleClose = () => {
    onClose();
  };

  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, paymentMethod }); // Pasar un objeto con nombre y paymentMethod
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nombre</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <DialogTitle>Forma de Pago</DialogTitle>
          <FormControlLabel
            control={
              <Checkbox
                checked={paymentMethod === "transferencia"}
                onChange={() => setPaymentMethod("transferencia")}
              />
            }
            label="Transferencia"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={paymentMethod === "efectivo"}
                onChange={() => setPaymentMethod("efectivo")}
              />
            }
            label="Efectivo"
          />


          <DialogActions>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleClose} color="secondary">
                Cerrar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>

            </div>

          </DialogActions>
        </form>
      </DialogContent>

    </Dialog>
  );
}

export default FormaDePagoDialog;
