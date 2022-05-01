import React from 'react';
import Logo from './../../img/conntec.png'
import { DiAndroid } from "react-icons/di";
import Chat from './../../img/chat-icon.png'
import Nuvem from './../../img/nuvem.png'
import './index.css'

// Página Inicial do Site
export default function Inicio(){
    return(
        <>
        {/*Topo da Página */}
            <div className="header-project">
                <div className='section-project'>
                    
                    <div className="description-project">
    
                        <h1>Mural de Noticias da Etec</h1>
                        <h2>Para Alunos</h2>
                        
                        <span  className='description'>Conntec é um aplicativo para celular que facilita o acessos de informações da Etec. Contando com o diversas abas para a facilidade de reconhecimento de suas necessidades. </span>
                        
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
            <main id="main-index">

                <div className='box-apresentation'>

                    <div className='context-box'>

                       

                        <h1>

                            Comunicação Etec e Aluno

                        </h1>

                        <div className='image-box'>

                         <img width={60} src={Chat} className="icon-chat"/>

                        </div>

                    </div>

                    <div className='info-box'>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>

                   

                </div>
                <div className='list-box'>
                    <div className='list'>
                       <h1>Noticias</h1>
                       <p>Acesse as noticias da escola para ficar por dentro dos acontecimentos.</p>
                    </div>
                    <div className='list'>
                        <h1>Notificações</h1>
                        <p>Receba notificações para saber na hora o que acontece durante o dia.</p>
                        
                    </div>
                    <div className='list'>
                        <h1>Calendario</h1>
                        <p>Acompanhe os dias decorridos da Etec, sabendo o dias letivos.</p>
                    </div>
                </div>
            </main>
        
        </>
    );
};

