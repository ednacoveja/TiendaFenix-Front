const initialState = {
    productos: [],
    allProducts: [],
    users: [],
    allUsers: [],
    carrito: [],
    filtrosAplicados: []

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_TYPE":
            const productosOriginales = state.allProducts;

            const productosFiltrados = productosOriginales.filter((p) =>
                p.type.includes(action.payload)
            );
            return {
                ...state,
                productos: action.payload === "all" ? productosOriginales : productosFiltrados,
            };

        case "ADD_TO_CARRITO":
            const item = action.payload;
            return {
                ...state,
                carrito: [...state.carrito, item],
            };

        case "CLEAR_CARRITO":
            return {
                ...state,
                carrito: [],
            };
        case "DELETE_ITEM":
            const del = action.payload;
            const compra = state.carrito || [];
            const index = compra.findIndex((i) => i._id === del)
            let newArray = [...state.carrito]
            if (index >= 0) {
                newArray.splice(index, 1)
            }
            return {
                ...state,
                carrito: newArray,
            };

        case "GET_PRODUCTS":
            return {
                ...state,
                productos: action.payload,
                allProducts: action.payload,
            }
        case "CREATE_POST":
            console.log(action.payload);
            return {
                productos: [action.payload, ...state.productos],
            };
        case "DELETE_POST":
            alert(action.payload.data);
            const allposteos = state.productos
            const filter = allposteos.filter(el => el._id !== action.payload.id)
            return {
                ...state,
                productos: filter,
            };
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                allUsers: action.payload,
            }
        case "CREATE_USER":
            console.log(action.payload);
            return {
                users: [action.payload, ...state.users],
            };
        case "DELETE_USER":
            alert(action.payload.data);
            const allUsers = state.users
            const filterU = allUsers.filter(el => el._id !== action.payload.id)
            return {
                ...state,
                productos: filterU,
            };


        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;