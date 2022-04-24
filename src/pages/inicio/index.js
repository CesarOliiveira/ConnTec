import React from 'react';
import Logo from './../../img/conntec.png'
import { DiAndroid } from "react-icons/di";
import Chat from './../../img/chat.png'
import Nuvem from './../../img/nuvem.png'
import './index.css'

// Página Inicial do Site
export default function Inicio(){
    return(
        <>
        {/*Topo da Página */}
            <div className="header-project">
                <div className='section-project'>
                    
                    <div class="description-project">
    
                        <h1>Mural de Noticias da Etec</h1>
                        <h2>Para Alunos</h2>
                        
                        <span  className='description'>Conntec é um aplicativo para celular que facilita o acessos de informações da Etec. Contando com o diversas abas para a facilidade de reconhecimento de suas necessidades. </span>
                        
                        <div className="section-button">
                            <a  className="button-download" href='#'>
                                <div class="button">
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

                </div>
            </main>
             
        </>
    );
};

