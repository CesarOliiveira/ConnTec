import React from 'react';
import Logo from './../../img/conntec.png'
import './header.css';

//Criando o Header do site
export default function header(){
    return(
    <>
        <header>
            <div className="hdbox">
                <div className='logo-site'>
                     <img width={280}  src={Logo}></img>
                </div>
                <a href="siteTCC.html" className="logo"></a> 
                <nav className="nav-main"> 
                    <ul className="nav-links">
                        <li className="nav-item"><a href="#">HOME</a></li>
                        <li className="nav-item"><a href="#">DOCUMENTAÇÃO</a></li>
                        <li className="nav-item"><a href="#">SOBRE NÓS</a></li>
                        <li className="nav-item"><a href="#">ETEC</a></li>
                        <li className="nav-item"><a href="#">CENTRO PAULA SOUZA</a></li>
                    </ul>
                </nav> 
            </div>
        </header>
    </>
    )
}