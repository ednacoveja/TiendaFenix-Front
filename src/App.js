import { Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito.jsx";
import Products from "./componentes/Products.jsx";
import { Landing } from "./componentes/Landing.jsx";
import Admin from "./componentes/Admin.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Products />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

