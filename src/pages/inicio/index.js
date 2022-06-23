import React from 'react';

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import { DiAndroid } from "react-icons/di";
import { IoMdNotifications } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa";

import Chat from './../../img/chat-icon.png';
import Info from './../../img/info.png';
import Celular from './../../img/celular.png';
import Conntec from './../../img/conntec.png';


import './index.css'

// Página Inicial do Site
export default function Inicio(){
   
    
    return(
        <>
        <Header/>
        {/*Topo da Página */}
            <div className="header-project">
                <div className='section-project'>
                
                    <div className="description-project">
                    
                        <h1>Informações e Noticias da Etec</h1>
                        <h2>Para Alunos</h2>
                    
                        <div  className='description'>Conntec é um aplicativo para celular que facilita o acessos de informações da Etec. Contando com o diversas abas para a facilidade de reconhecimento de suas necessidades. </div>
                    
                        <div className="section-button">
                            <a  className="button-download" href='#'>

                                <div className="button">
                                    <span><DiAndroid/> Download</span>
                                </div>
                            </a>
                        </div>

                    </div>
                        {/*Botão de Download */}
                    
                </div>
            </div>

            {/* Conteudo do Projeto */}
            <div className = "main-container">
                <div className = "main-content">
                {/* Caixa de Informação 1 */}
            
                    <div className="spacer">
                        <div className='box-apresentation'>
                            <div className='info-box'>

                                <div className='box-title'>
                                    <h1> Comunicação Etec e Aluno </h1>

                                    <div className='image-box'>
                                        <img width={60} src={Chat} className="float-icon"/>
                                    </div>

                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                            <div className='demonstration-image'>
                
                                <img width={170} src={Celular} className="template-celular"/>
                                <p>Test</p>
                                
                            </div>
                        </div>
                    

                        {/* Caixa de Informação 2 */}
                    
                        <div className='box-apresentation row-reverse'>
                            <div className='info-box info-left'>

                                <div className='box-title row-reverse'>
                                    <h1> Acesso a informações </h1>

                                    <div className='image-box'>
                                        <img width={60} src={Info} className="float-icon"/>
                                    </div>

                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        
                            <div className='demonstration-image'>
            
                                <img width={100} src={Conntec} className="icon-conntec"/>  
                                <img width={170} src={Celular} className="template-celular"/>
                                <p>Veja Informações Sobre sua Etec.</p>
                            </div>
                        </div>  
                    </div>
                    
                    {/* O que tem no aplicativo */}
                    
                    <div className="spacer">
                        <div className='list-box'>

                            <div className="mid-list">

                                <div className='list'>
                                    <div className="list-head">
                                        <FaNewspaper className='icon-apresentation bk'/>
                                        <h1>Noticias</h1>
                                    </div>
                                    <p>Acesse as noticias da escola para ficar por dentro dos acontecimentos.</p>
                                </div>

                                <div className='list'>
                                    <div className="list-head">
                                        <IoMdNotifications className='icon-apresentation bk' />
                                        <h1>Notificações Rápidas</h1>
                                    </div>
                                        <p>Receba notificações para saber na hora o que acontece durante o dia.</p> 
                                </div> 

                            </div>

                            <div className="mid-list">

                                <div className='list'>
                                    <div className="list-head">
                                        <h1>Informações Centralizadas</h1>
                                    </div>
                                    <p>Receba notificações para saber na hora o que acontece durante o dia.</p>
                                </div>

                                <div className='list'>
                                    <div className="list-head">
                                        <h1>Notificações</h1>
                                    </div>
                                        <p>Receba notificações para saber na hora o que acontece durante o dia.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="spacer">
                        <div className='explication-project'>
                            <div className='conntec-title'>
                                <h1>ConnTec</h1>
                            </div>
                            <div className='description-conntec'>
                                <h2>O que é a ConnTec?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moll</p>
                            </div>
                            <div className='description-conntec'>
                                <h2>Qual é o seu objetivo?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moll</p>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
           <Footer/>


            
        </>
    );
};

