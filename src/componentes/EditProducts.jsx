
import "./EditProducts.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useSelector } from "react-redux";


const axios = require("axios");

export const ChangeForm = (props) => {

    const [input, setinput] = useState({});
    const [change, setChange] = useState({
        name: false,
        description: false,
        image: false,
        type: false,
        price: false,
        cantidad: false,
        emprendimiento: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        const re = await axios
            .patch(`/products/${id}`, input)
            .then((d) => {
                console.log(d);
            })
            .catch((e) => {
                console.log(e);
                return "No se pudo completar los cambios, intente mas tarde";
            });
        alert(re);
        window.location.reload();
    };
    const handleBtnEditar = (e) => {
        if (e.target.value === "false") {
            setChange({ ...change, [e.target.name]: true });
        } else {
            setChange({ ...change, [e.target.name]: false });
        }
    };
    const handleInputChange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });

    };
    return (
        <div >
            
                <div className="changeInptCont">
                    <TextField
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                    />
                    <button
                        type="button"
                        name="name"
                        value={change.name}
                        onClick={handleBtnEditar}
                        className="btnFormEditListo"
                    ></button>
                </div>
            
                <div className="changeInptCont">
                    <TextField
                        type="text"
                        name="description"
                        value={input.description}
                        onChange={handleInputChange}
                        sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
                        id="outlined-basic"
                        label="description"
                        variant="outlined"
                    />
                    <button
                        type="button"
                        name="description"
                        value={change.description}
                        onClick={handleBtnEditar}
                        className="btnFormEditListo"
                    ></button>
                </div>
                <div className="changeInptCont">
                    
                        <div className="descChang">
                            <PermContactCalendarIcon /> {userLoged.description}
                        </div>
                 
                    <button
                        type="button"
                        name="description"
                        value={change.description}
                        onClick={handleBtnEditar}
                        className="btnFormEdit"
                    ></button>
                </div>
            
         
                <div className="changeInputCont">
                    <TextField
                        type="text"
                        name="image"
                        value={input.image}
                        onChange={handleInputChange}
                        sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
                        id="outlined-basic"
                        label="foto portada"
                        variant="outlined"
                    />

                    <button
                        type="button"
                        name="image"
                        value={change.image}
                        onClick={handleBtnEditar}
                        className="btnFormEditListo"
                    ></button>
                </div>
     
        
                <div className="changeInptCont">
                    <TextField
                        type="text"
                        name="descripcion"
                        value={input.name}
                        onChange={handleInputChange}
                        sx={{ width: "82%", backgroundColor: "white", marginLeft: "10%" }}
                        id="outlined-basic"
                        label="descripcion"
                        variant="outlined"
                    />
                </div>
            <button onClick={handleSubmit} className="btnGuarCamb">
                Guardar Cambios
            </button>
        </div>
    );
};