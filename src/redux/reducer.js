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
            const randomProductos = action.payload.sort(() => Math.random() - 0.5);
            return {
                ...state,
                productos: randomProductos,
                allProducts: randomProductos,
            }
        case "CREATE_POST":
            console.log(action.payload);
            return {
                productos: [action.payload, ...state.productos],
            };
        case "EDIT_POST":
            return {
                ...state,
                productos: state.productos.map((product) =>
                    product._id === action.payload._id ? action.payload : product
                ),
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
            const randomUsers = action.payload.sort(() => Math.random() - 0.5);
            return {
                ...state,
                users: randomUsers,
                allUsers: randomUsers,
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
                users: filterU,
            };
            case "EDIT_USER":
                return {
                    ...state,
                    users: state.users.map((user) =>
                        user._id === action.payload._id ? action.payload : user
                    ),
                };


        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;