import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import './sobrenos.css'
import './gambiarra.css'

import gitHub from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
// Página da Documentação do TCC - ConnTec
function Sobrenos(){
    return(
        <>
            <Header/>

             <div className="container">
                <div className = "title-box">
                    <h1>Sistema de comunicação entre Aluno & Escola </h1> 
                </div>
            </div>

            {/* Sobre a Conntec */}
            <div className="container column">
                <div className = "container between">
                    <div className = "img-box">
                        {/* Imagem ilustrativa */}
                    </div>
                    <div className ="desc-box">
                        <h1> Por que utilizar o Conntec?</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className = "container between">
                    <div className ="desc-box">
                        <h1> Por que desenvolvemos o Conntec?</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "img-box">
                        {/* Imagem ilustrativa */}
                    </div>
                </div>
            </div>

            {/* Informações do Grupo */}

            <div className="container">
                <div className = "title-box">
                    <h1>Equipe Conntec</h1> 
                </div>
            </div>

            <div className="container column">

                <div className="container between">
                    <div className = "content-box content-right">
                        <label htmlFor="cb-show"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show"/>
                        
                        <div className="dev-info">
                            <h1>Ana Paula Rocha da Silva  </h1> <p> DBA e Documentalista</p>
                            <div id = "hidden-info">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <img src={linkedin} className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="https://github.com/Napaula019"> <img src={gitHub} className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-left">
                        
                        <label htmlFor="cb-show2"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show2"/>

                        <div className="dev-info">
                            <h1>Cauã da Silva Cruz </h1> <p>Full stack Mobile</p>
                            <div id = "hidden-info2">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> LinkedIn <img src={linkedin} className="mini-icon"/></a><br/></li>
                                    <li> <a href="https://github.com/cauacruz17"> GitHub <img src={gitHub} className="mini-icon"/> </a><br/></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-right">
                        <label htmlFor="cb-show3"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show3"/>

                        <div className="dev-info">
                            <h1>Cesar Adriano de Freitas </h1> <p>Full stack Mobile</p>
                            <div id = "hidden-info3">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <img src={linkedin} className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="https://github.com/CesarOliiveira"> <img src={gitHub} className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-left">
                        <label htmlFor="cb-show4"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show4"/>

                        <div className="dev-info">
                            <h1>Diogo Correia Campos </h1> <p>Full stack mobile e DBA</p>
                            <div id = "hidden-info4">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#">LinkedIn <img src={linkedin} className="mini-icon"/> </a><br/></li>
                                    <li> <a href="https://github.com/Dyas15">GitHub <img src={gitHub} className="mini-icon"/> </a><br/></li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className="container between">
                    <div className = "content-box content-right">
                        <label htmlFor="cb-show5"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show5"/>
                        
                        <div className="dev-info">
                            <h1>Diogo Dias Rodrigues Gallina </h1> <p>Front-end e Designer mobile</p>
                            <div id = "hidden-info5">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <img src={linkedin} className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="https://github.com/Diogo-gallina"> <img src={gitHub} className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-box content-left">
                        <label htmlFor="cb-show6"><div className = "img"/></label>
                        <input type= "checkbox" id="cb-show6"/>

                        <div className="dev-info">
                            <h1>Erik Alves da Silva </h1> <p>Front end Mobile e Web</p>
                            <div id = "hidden-info6">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> LinkedIn <img src={linkedin} className="mini-icon"/></a><br/></li>
                                    <li> <a href="https://github.com/Eriklux"> GitHub <img src={gitHub} className="mini-icon"/> </a><br/></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="container between">
                    <div className = "content-box content-right">
                        <label htmlFor="cb-show7"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show7"/>

                        <div className="dev-info">
                            <h1>Gisele Cristina dos Santos </h1> <p>Tester e Documentalista</p>
                            <div id = "hidden-info7">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <img src={linkedin} className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="https://github.com/GiseleCristina22"> <img src={gitHub} className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container between">
                    <div className = "content-left content-box">
                    <label htmlFor="cb-show8"><div className = "img"/></label> 
                    <input type= "checkbox" id="cb-show8"/>

                        <div className="dev-info">
                            <h1>Paulo Cezar da Silva Ribeiro </h1> <p>Arquiteto de Cybersegurança</p>
                            <div id = "hidden-info8">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> LinkedIn <img src={linkedin} className="mini-icon"/></a><br/></li>
                                    <li> <a href="https://github.com/PauloCezarSR"> GitHub <img src={gitHub} className="mini-icon"/> </a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container between">
                    <div className = "content-box content-right">
                        <label htmlFor="cb-show9"><div className = "img"/></label> 
                        <input type= "checkbox" id="cb-show9"/>

                        <div className="dev-info">
                            <h1>William Vinicius Ayres de Paula </h1> <p>Front-end web e Documentalista</p>
                            <div id = "hidden-info9">
                                <ul>
                                    <li>Informações Extras</li>
                                    <li> <a href="#"> <img src={linkedin} className="mini-icon"/> LinkedIn</a><br/></li>
                                    <li> <a href="https://github.com/William-Vinicius"> <img src={gitHub} className="mini-icon"/> GitHub</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

            <Footer/>
        </>
    );
};

export default Sobrenos;