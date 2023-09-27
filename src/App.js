
import './App.css';
import Navbar from './componentes/Navbar';
import Products from './componentes/Products';
import Carrito from './componentes/Carrito';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
