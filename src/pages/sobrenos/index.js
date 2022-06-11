import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import './sobrenos.css'
// Página da Documentação do TCC - ConnTec
function Sobrenos(){
    return(
        <>
            {/* Informações do Grupo */}
            <div className="container">
                <div className = "title-box">
                    <h1>Desenvolvedores Conntec</h1> 
                </div>
            </div>

            <div className="container column">

                <div className="container between">
                    <div className = "content-box content-right">
                        <input type= "checkbox" id="cb-show"/>
                        <label htmlFor="cb-show"><div className = "img"/></label> 

                        <div className="dev-info">
                            <h1>William Vinicius Ayres de Paula </h1> <p>Parte Desenvolvida</p>
                            <div id = "hidden-info">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <div className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="#"> <div className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-left">
                        <div className="dev-info">
                            <h1>Ana Paula Rocha de Souza </h1> <p>Parte Desenvolvida</p>
                            <div id = "hidden-info">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <div className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="#"> <div className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>

                        <input type= "checkbox" id="cb-show"/>
                        <label htmlFor="cb-show"><div className = "img"/></label> 
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-right">
                        <input type= "checkbox" id="cb-show"/>
                        <label htmlFor="cb-show"><div className = "img"/></label> 

                        <div className="dev-info">
                            <h1>Cezar Adriano </h1> <p>Parte Desenvolvida</p>
                            <div id = "hidden-info">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <div className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="#"> <div className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-left">
                        <div className="dev-info">
                            <h1>Gizele Cristina </h1> <p>Parte Desenvolvida</p>
                            <div id = "hidden-info">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <div className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="#"> <div className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>

                        <input type= "checkbox" id="cb-show"/>
                        <label htmlFor="cb-show"><div className = "img"/></label> 
                    </div>
                </div>

            </div>
            {/* Sobre a Conntec */}
            <div className="container column">
                <div className = "container between">
                    <div className = "img-box">
                        {/* Imagem ilustrativa */}
                    </div>
                    <div className ="description-box">
                        <h1> Por que utilizar o Conntec?</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className = "container between">
                    <div className ="description-box">
                        <h1> Por que desenvolvemos o Conntec?</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "img-box">
                        {/* Imagem ilustrativa */}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sobrenos;