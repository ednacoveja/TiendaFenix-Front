import axios from "axios";



export function addToCarrito(idProduct, userLoged) {
  return async function (dispatch) {
    try {
      if (userLoged) {
        try {
          const updatedUser = {
            carrito: [...userLoged.carrito, idProduct],
          };
          console.log(updatedUser)

          const response = await axios.put(`/users/${userLoged._id}`, updatedUser);
          dispatch({ type: "EDIT_USER", payload: response.data });
        } catch (error) {
          console.log(error);
        }

      } else {
        var response = await axios.get(`/products/${idProduct}`);
        return dispatch({
          type: "ADD_TO_CARRITO",
          payload: response.data
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearCarrito() {
  return { type: "CLEAR_CARRITO" };
}

export function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    payload: id
  }
}

export function deleteUserCarritoItem(id, userLoged) {
  return async function (dispatch) {
    try {
      // Actualizar el carrito en el estado de Redux
      const userIndex = userLoged.carrito.findIndex((item) => item._id === id);
      const newUserCarrito = userLoged.carrito
      if (userIndex >= 0) {
        newUserCarrito.splice(userIndex, 1);
      }
      dispatch({ type: "SET_USER", payload: { ...userLoged, carrito: newUserCarrito } });

      // Actualizar el carrito en la base de datos
      const updatedUser = {
        carrito: newUserCarrito,
      };
      const response = await axios.put(`/users/${userLoged._id}`, updatedUser);
      dispatch({ type: "EDIT_USER", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductos() {
  try {
    return async function (dispatch) {
      var response = await axios.get("/products");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createPost(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("/products", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return dispatch({ type: "CREATE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function deletePost(id) {
  try {
    return async function (dispatch) {
      var response = await axios.delete("/products/" + id);
      return dispatch({ type: "DELETE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createUser(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("/users", payload);
      return dispatch({ type: "CREATE_USER", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function getUsers() {
  try {
    return async function (dispatch) {
      var response = await axios.get("/users");
      return dispatch({ type: "GET_USERS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function getUserLoged(email) {
  try {
    if (email) {
      return async function (dispatch) {
        var response = await axios.get(`/users?email=${encodeURIComponent(email)}`)
        const userLoged = response.data.length > 0 ? response.data[0] : null;
        dispatch({ type: 'SET_USER', payload: userLoged })
        dispatch({ type: 'SET_LOGGED_IN', payload: userLoged !== null })
      }
    } else {
      return async function (dispatch) {
        dispatch({ type: 'SET_USER', payload: null })
        dispatch({ type: 'SET_LOGGED_IN', payload: false })
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export const editUser = (form) => async (dispatch) => {
  try {
    const updatedUser = {
      _id: form._id,
      carrito: form.carrito,
    };

    const response = await axios.put(`/users/${form._id}`, updatedUser);
    dispatch({ type: "EDIT_USER", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export function deleteUser(id) {
  try {
    return async function (dispatch) {
      var response = await axios.delete("/users/" + id);
      return dispatch({ type: "DELETE_USER", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}
