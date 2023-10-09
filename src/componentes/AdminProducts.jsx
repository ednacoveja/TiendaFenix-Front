import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPost, getProductos, deletePost } from "../redux/actions";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./Admin.css"
import Swal from "sweetalert2";

function AdminProducts() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  const productos = useSelector((state) => state.productos);

  async function borrarProducto(id) {
    let paranoid = false;
    dispatch(deletePost(id, paranoid));
    Swal.fire({
      title: "Producto Eliminado Correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
    })
  }

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: null,
    type: "",
    price: "",
    rating: "",
    emprendimiento: "",
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
      await dispatch(createPost(input));
      alert("creado");
      setInput({
        name: "",
        description: "",
        image: null,
        type: "",
        price: "",
        rating: "",
        emprendimiento: "",
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
        <h1 className="titulo">Create your new product</h1>
        <br />
        <form>
          <div>
            <label className="label">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              value={input.name}
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
            <label className="label">Price:</label>
            <input
              type="number"
              name="price"
              className="input"
              value={input.price}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Rating:</label>
            <input
              type="number"
              name="rating"
              className="input"
              value={input.rating}
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
            <label className="label">Type:</label>
            <input
              className="input"
              type="text"
              name="type"
              value={input.type}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Emprendimiento:</label>
            <input
              className="input"
              type="text"
              name="emprendimiento"
              value={input.emprendimiento}
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
      <h1 className="titulo">Productos</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell >Nombre</TableCell>
              <TableCell >Tipo</TableCell>
              <TableCell >Emprendimiento</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {
              productos
                ? productos.map((p) => {
                  { console.log(p) }
                  return (
                    <TableRow
                      Key={p._id}
                      sw={{ '&:last-child td, &:last-child th': { border: 5 } }}
                    >

                      <TableCell component="th" scope="row">
                        {p._id}
                      </TableCell>
                      <TableCell>{p.name}</TableCell>
                      <TableCell>{p.type}</TableCell>
                      <TableCell>{p.emprendimiento}</TableCell>
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
                          onClick={() => borrarProducto(p._id)}
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

export default AdminProducts;
