import React from 'react';
import Logo from './../../img/conntec.png'
import { DiAndroid } from "react-icons/di";
import { DiAptana } from "react-icons/di";
import './index.css'

// Página Inicial do Site
export default function Inicio(){
    return(
        <>
        {/*Topo da Página */}
            <div className="header-project">
                <div className='section-project'>
                    <div class="description-project">
                        <img width={320} src={Logo} alt='conntec'/>
                        <p>ACESSE AVISOS E NOTICIAS DA ETEC TABOÃO DA SERRA.</p>
                        <span>Quer ver avisos e noticias de forma fácil? Sem precisar ir no mural ou no Whatsapp?
                            Você esta no lugar Certo.
                        </span>
                    </div>
                        {/*Botão de Download */}
                        <a  className="button-download" href='#'>
                            <div class="button">
                                <span><DiAndroid/> Download</span>
                            </div>
                        </a>
                    
                </div>
                {/* Demonstração do App Conntec */}
                <div className="conntec-project">
                        <DiAptana className='engrenagem'/>
                        <p>Build</p>
                        <div className='App-project'>
                            
                        </div>

                </div>
                
            </div>
        </>
    );
};

