import './Landing.css'
import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

export const Landing = () => {

    const navigate = useNavigate();

    async function ALaHome(e) {
        e.preventDefault();
        navigate("/home");
    }
    async function about(e) {
        e.preventDefault();
        navigate("/about");
    }

    return (
        <div>
            <main className='landing'>
                <div className='landArribaCont'>
                    <div className='logo'>
                        Productos del Norte Argentino
                    </div>
                    <div >
                        <button className='btnCreCu' onClick={(e) => ALaHome(e)}>Tienda</button>
                    </div>
                </div>
                <div className='landArribaCont'>
                    <div >
                    </div>
                    <div >
                        <button className='btnCreCu' onClick={(e) => about(e)}>Info</button>
                    </div>
                </div>
            </main>

            <Footer></Footer>

        </div>


    )
}
