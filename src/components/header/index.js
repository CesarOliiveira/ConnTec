import React from 'react';
import Logo from './../../img/conntec.png';
import {Link} from 'react-router-dom';

import Menu from '../../img/menu.png'

import './header.css';

//Criando o Header do site
export default function header(){
    return(
    <>
        <header >
            <div className="hdbox">
                <div className='logo-site'>
                    <a href="/">
                         <img width={170}  src={Logo}></img>
                     </a>
                </div>
                
                <input type="checkbox" id="cb-menu"/>
                <label htmlFor='cb-menu'>
                    <div id="btn-hamburguer"><img width={30} src={Menu}/></div>
                </label>
                
                <a href="siteTCC.html" className="logo"></a> 
                <nav className="nav-main"> 
                    <ul className="nav-links">
                        <a href="/"> <li className="nav-item">HOME</li></a>
                        <a href="/documento"><li className="nav-item">DOCUMENTAÇÃO</li></a>
                        <a href="/sobrenos"><li className="nav-item">SOBRE NÓS</li></a>
                        <a href="https://etects.com.br/"><li className="nav-item">ETEC TABOÃO</li></a>
                        <a href="https://www.cps.sp.gov.br/"><li className="nav-item">CENTRO PAULA SOUZA</li></a>
                    </ul>
                </nav> 
            </div>
            
           

        
        </header>
        
    </>
    )
}