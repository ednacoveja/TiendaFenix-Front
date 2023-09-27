import './Landing.css'
import React from 'react'
import { useNavigate } from "react-router-dom";


export const Landing = () => {

    const navigate = useNavigate();

    async function ALaHome(e) {
        e.preventDefault();
        navigate("/home");
    }

    async function LogIn(e) {
        e.preventDefault();
        navigate("/signin");
    }

    async function LogUp(e) {
        e.preventDefault();
        navigate("/signup");
    }

    return (
        <div className='landing'>
            <div className='landArribaCont'>
                <div className='logo'>
                    Red de Productos Salteños
                </div>
                <div >
                    <button className='btnCreCu' onClick={(e) => ALaHome(e)}>Catálogo</button>
                </div>
            </div>
            <div className='landArribaCont'>
                <div >
                </div>
                <div >
                    <button className='btnCreCu' onClick={(e) => LogUp(e)}>Productores</button>
                </div>
            </div>
            <div className='landArribaCont'>
                <div >
                </div>
                <div >
                    <button className='btnCreCu' onClick={(e) => LogUp(e)}>Crear Cuenta</button>
                </div>
            </div>
            <div className='landArribaCont'>
                <div></div>
                <div >
                    <button className='btnCreCu' onClick={(e) => LogIn(e)}>Ingresar</button>
                </div>
            </div>

        </div>

    )
}
