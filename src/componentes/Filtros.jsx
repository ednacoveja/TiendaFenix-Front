import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByType,
} from "../redux/actions";
import { Box, FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { grey} from "@mui/material/colors";

export default function Filtros() {
    const theme = useTheme(); 
    const dispatch = useDispatch();

    const allProducts = useSelector((state) => state.productos);

    function handlerFilterProducts(e) {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
    }

    return (
        <div>

            <Box sx={{ maxWidth: 130 }} >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" variant="outline" style={{ color: theme.palette.text.primary}} >
                        Categorías
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handlerFilterProducts(e)}
                        style={{ borderStyle:"none"}}
                    >
                        <MenuItem value="all" style={{ color:grey[900]}}>Todos</MenuItem>
                        <MenuItem value="cosmetica"style={{ color:grey[900]}}>Cosmetica</MenuItem>
                        <MenuItem value="alimentos"style={{ color:grey[900]}}>Alimentos</MenuItem>
                        <MenuItem value="condimentos"style={{ color:grey[900]}}>Condimentos</MenuItem>
                        <MenuItem value="plantas"style={{ color:grey[900]}}>Plantas</MenuItem>
                        <MenuItem value="aromas" style={{ color:grey[900]}}>Aromas y Velas</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    );
}