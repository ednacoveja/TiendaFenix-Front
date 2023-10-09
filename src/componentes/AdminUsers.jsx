import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUser, getUser, deleteUser } from "../redux/actions";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./Admin.css"
import Swal from "sweetalert2";

function AdminUsers() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const usuarios = useSelector((state) => state.users);

  async function borrarUser(id) {
    let paranoid = false;
    dispatch(deleteUser(id, paranoid));
    Swal.fire({
      title: "Usuario Eliminado Correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
    })
  }

  const [input, setInput] = useState({
    nombre: "",
    description: "",
    image: null,
    instagram: "",
  });

  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.files[0],
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createUser(input));
      alert("creado");
      setInput({
        nombre: "",
        description: "",
        image: null,
        instagram: "",
    
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form">
        <br />
        <Link to="/home">
          <button className="buttonHome">Return HOME</button>
        </Link>
        <br />
        <h1 className="titulo">Create your new emprendimiento</h1>
        <br />
        <form>
          <div>
            <label className="label">Nombre:</label>
            <input
              className="input"
              type="text"
              name="nombre"
              value={input.nombre}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Description:</label>
            <input
              className="input"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handlerChange(e)}
            />         
            <br />
            <br />
            <label className="label">Image:</label>
            <input
              className="input"
              type="file"
              name="image"
              onChange={(e) => handleImageUpload(e)}
            />

            <br />
            <br />
            <label className="label">Instagram:</label>
            <input
              className="input"
              type="text"
              name="instagram"
              value={input.instagram}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <button
              className="buttonCreate"
              type="submit"
              onClick={(e) => handlerSubmit(e)}
            >
              CREATE
            </button>
            <br />
            <br />
          </div>
        </form>
      </div>
      <h1 className="titulo">Emprendimientos</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell >Nombre</TableCell>
              <TableCell >Instagram</TableCell>
              <TableCell >Descripcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
             usuarios
                ? usuarios.map((p) => {
                  { console.log(p) }
                  return (
                    <TableRow
                      Key={p._id}
                      sw={{ '&:last-child td, &:last-child th': { border: 5 } }}
                    >

                      <TableCell component="th" scope="row">
                        {p._id}
                      </TableCell>
                      <TableCell>{p.nombre}</TableCell>
                      <TableCell>{p.instagram}</TableCell>
                      <TableCell>{p.description}</TableCell>
                      <TableCell align="right">
                      </TableCell>
                      <TableCell align="right">
                        <button
                          className="buttonUsuario"
                        >
                          Editar
                        </button>
                      </TableCell>
                      <TableCell align="right">
                        <button
                          onClick={() => borrarUser(p._id)}
                          className="buttonUsuario"
                        >
                          Eliminar
                        </button>
                      </TableCell>

                    </TableRow>
                  )
                })
                : null}
          </TableBody>

        </Table>


      </TableContainer>


    </div>
  );
}

export default AdminUsers;