import React, { useState } from "react";


function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const contraseñaEnv=process.env.REACT_APP_CONTRASEÑA_ADMIN

  const handleLogin = () => {
    // Verifica si la contraseña ingresada es correcta
    if (password ===contraseñaEnv ) {
        console.log(password)
      onLogin();
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión de Administrador</h2>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default AdminLogin;