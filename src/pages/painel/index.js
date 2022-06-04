import React from 'react';

import './painel.css'; 
import {ImHome} from 'react-icons/im';
import {BsGearFill} from 'react-icons/bs';
import {TiEdit} from 'react-icons/ti';
import {FaUserAlt} from 'react-icons/fa';
import {FaPaste} from 'react-icons/fa';
import {IoMdExit} from 'react-icons/io';

export default function MenuPainel() {
    return(
       <>
            <header className='header-painel'>
                <div className="hdbox">
                    <h2>Painel</h2>
                    <a href="siteTCC.html" className="logo"> ConnTec</a> 
                </div>
            
                <div className="hamburguer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            
            </header>

            <div className="app">
                <div className="content-menubar">
                    <div className="menubar">
                        <ul>
                            <li><a href='#'><ImHome className='faicon'/>Início</a></li>
                            <li><a href='#'><BsGearFill className='faicon'/>Config</a></li>
                        </ul>
                    </div>
                    <span className="line"></span>
                    <div className="area-admin">
                        <ul>
                            <li><a href=""><TiEdit className='faicon'/>Post</a></li>
                            <li><a href=""><FaUserAlt className='faicon'/>Users</a></li>
                            <li><a href=""><FaPaste className='faicon'/>Perm</a></li>
                        </ul>
                        
                            
                        
                    </div>
                    <div className="content-exit">
                        <ul>
                            <li>
                                <a href="">
                                    <IoMdExit className='faicon'/>
                                    Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </> 
    );
};

