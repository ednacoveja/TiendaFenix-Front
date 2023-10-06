import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByType,
} from "../redux/actions";
import { Box, FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from "@mui/material";

export default function Filtros() {
    const dispatch = useDispatch();

    const allProducts = useSelector((state) => state.productos);

    function handlerFilterProducts(e) {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
    }

    return (
        <div>

            <Box sx={{ maxWidth: 120 }} >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" style={{ color: "white" }} >
                        Categorías
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handlerFilterProducts(e)}
                        style={{ color: "white" }}
                    >
                        <MenuItem value="all">Todos</MenuItem>
                        <MenuItem value="Aromas">Aromas</MenuItem>
                        <MenuItem value="Balsamo">Balsamo</MenuItem>
                        <MenuItem value="desodorante">Desodorante</MenuItem>
                        <MenuItem value="velas">Velas</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    );
}