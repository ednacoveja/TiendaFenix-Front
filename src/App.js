import { Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito.jsx";
import Products from "./componentes/Products.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Products />}/> 
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;

