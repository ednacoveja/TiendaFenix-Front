import axios from "axios";


export const filterByType = (categoria) => ({
  type: "FILTER_TYPE",
  payload: categoria,
});



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

export const editPost = (form) => async (dispatch) => {
  try {
    const response = await axios.put(`/products/${form.id}`, form);
    dispatch({ type: "EDIT_POST", payload: response.data });
    dispatch(getProductos());
  } catch (error) {
    console.error(error);
  }
};

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

export function getUser() {
  try {
    return async function (dispatch) {
      var response = await axios.get("/users");
      return dispatch({ type: "GET_USERS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createUser(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("/users", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return dispatch({ type: "CREATE_USER", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

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



