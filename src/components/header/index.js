import React from 'react';
import './header.css';

export default function header(){
    return(
    <>
        <nav>
            <div className='container'>
                <a className='logo-navbar'> </a>
                <div className='navbar-search'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Documentação</a></li>
                        <li><a href='#'>Sobre Nós</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}