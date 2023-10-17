import { Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito.jsx";
import Products from "./componentes/Products.jsx";
import { Landing } from "./componentes/Landing.jsx";
import AdminP from "./componentes/AdminProducts.jsx";
import AdminU from "./componentes/AdminUsers.jsx";
import Info from "./componentes/Info.jsx";
import { useState } from "react";
import AdminLogin from "./componentes/AdminLogin.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000', // Define tus colores primarios
    },
    secondary: {
      main: '#fff', // Define tus colores primarios
    },
    text: {
      primary: '#fff', // Color del texto principal
      secondary: grey, // Color del texto secundario
    },
    background: {
      default: '#000', // Color de fondo predeterminado
      contrario: '#fff', // Color de fondo de áreas como tarjetas
    },
  }
})

const lightTheme = createTheme({
  palette: {
    type: 'light', // Activa el tema claro
    primary: {
      main: grey[200], // Define tus colores primarios
    },
    secondary: {
      main: grey[700], // Define tus colores primarios
    },
    text: {
      primary: grey[900], // Color del texto principal
      secondary: grey, // Color del texto secundario
    },
    background: {
      default:  '#fff', // Color de fondo predeterminado
      contrario: '#000', // Color de fondo de áreas como tarjetas
    },
  },
});



function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline /> 
        <Routes theme={darkMode ? darkTheme : lightTheme}>
          <Route exact path="/" element={<Landing darkMode={darkMode} onDarkModeToggle={toggleDarkMode} />} />
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
      </ThemeProvider>
    </div>
  );
}

export default App;

