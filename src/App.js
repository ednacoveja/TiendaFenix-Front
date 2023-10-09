import { Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito.jsx";
import Products from "./componentes/Products.jsx";
import { Landing } from "./componentes/Landing.jsx";
import AdminP from "./componentes/AdminProducts.jsx";
import AdminU from "./componentes/AdminUsers.jsx";
import  Info  from "./componentes/Info.jsx";
import { useState } from "react";
import AdminLogin from "./componentes/AdminLogin.jsx";


function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Products />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<Info />} />
        <Route
        path="/admin/Products"
        element={
          isAdminLoggedIn ? (
            <AdminP />
          ) : (
            <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
          )
        }
      />
      <Route
        path="/admin/Users"
        element={
          isAdminLoggedIn ? (
            <AdminU />
          ) : (
            <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
          )
        }
      />
      </Routes>
    </div>
  );
}

export default App;

