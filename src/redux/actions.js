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

