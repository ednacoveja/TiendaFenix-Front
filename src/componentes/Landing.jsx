import "./Landing.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterLanding from "./FooterLanding";

export const Landing = ({ darkMode, onDarkModeToggle }) => {
  const navigate = useNavigate();
  async function ALaHome(e) {
    e.preventDefault();
    navigate("/home");
  }
  async function about(e) {
    e.preventDefault();
    navigate("/about");
  }
  async function carrito(e) {
    e.preventDefault();
    navigate("/carrito");
  }

  function refreshPage() {
    window.location.reload(true); // Recargar la página sin caché
  }

  return (
    <div>
      <main className={`background ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="refreshContainer">
          <button className="btnRefresh" onClick={refreshPage}>
            Actualizar Página
          </button>
        </div>
        <div className="landArribaCont">
          <div className={`logo ${darkMode ? "dark-mode" : "light-mode"}`}>
            Emprendedores de Salta Argentina
          </div>
          <div>
            <button className="btnCreCu" onClick={(e) => ALaHome(e)}>
              Tienda
            </button>
          </div>
        </div>
        <div className="landArribaCont">
          <div></div>
          <div>
            <button className="btnCreCu" onClick={(e) => about(e)}>
              Info
            </button>
          </div>
        </div>
        <div className="landArribaCont">
          <div></div>
          <div>
            <button className="btnCreCu" onClick={(e) => carrito(e)}>
              Carrito
            </button>
          </div>
        </div>
      </main>
      <FooterLanding darkMode={darkMode} onDarkModeToggle={onDarkModeToggle} />
    </div>
  );
};
