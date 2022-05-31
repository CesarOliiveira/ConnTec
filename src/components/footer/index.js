import React from 'react';
import './footer.css'

import GitHub from './../../img/github.png';
import Logo from './../../img/conntec.png'

import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

//Criando a Parte do Footer/RodaPé do Site
export default function footer(){
    return(
    <>
        <div className='container-footer'>
            <div className = "ft-icons">
                    <div className = "ft-img-box">
                            
                        <div className = "ft-logo">
                            <img width={150} src={Logo} className="logo-footer" />
                        </div>

                        <div className = "ft-logo">
                            <a href="https://github.com/CesarOliiveira/ConnTec.git">
                                <img width={48} src={GitHub} className='logo-footer'/>
                            </a>
                        </div>

                    </div>

                    <div className = "ft-img-box">

                        <div className = "ft-img">
                            <BsWhatsapp className='icon'/> 
                        </div> 

                        <div className = "ft-img">
                        <p> <BsFacebook className='icon'/> </p>
                        </div> 

                        <div className = "ft-img">
                            <BsInstagram className='icon'/>
                        </div> 

                        <div className = "ft-img">
                            <BsTwitter className='icon'/>
                        </div>

                    </div>
            </div>
        </div>
         <footer className = "ft-main">
                
                <div className = "ft-box ft-height">
                    <div className = "ft-colum">
                        <p>LINKS</p>
                        <ul className='ft-link'>
                            <li><a href='#'>Termos de Uso</a></li>
                            <li><a href='#'> Sobre Nós</a></li>
                            <li><a href='#'>GitHub</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p>AFILIADOS</p>
                        <ul className='ft-link'>
                            <li><a href='#'> Etec Taboão da Serra</a></li>
                            <li><a href='#'></a></li>
                            <li><a href='#'> Centro Paula Souza</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p>Desenvolvido por:</p>
                        <ul className='ft-link'>
                            <li><a href='#'>Equipe: ConnTec</a></li>
                            <li><a href='#'>Em parceria com: Etec <br/>
                            Taboão da Serra - SP</a></li>
                        </ul>
                    </div>
                    


                </div>
                <div className='site-copyright'>
                    <div className='ft-center-copyright'>
                        <p>copyright © Conntec - Praça Miguel Ortega, 135 - Parque Assuncao, Taboão da Serra - SP, 06754-160 </p>
                    </div>
                </div>
        </footer>  
    </>
    );
}