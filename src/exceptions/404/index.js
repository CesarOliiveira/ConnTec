import React from 'react';
import {Link} from 'react-router-dom';

import conntec from './../../img/conntec.png';
import './erro404.css';
import Botao from '../../components/botao'

//Página do Erro 404 -  Página Não encontrada.
function Documento(){
    return(
        
            <div className='center-container'>
                <div className='container-404'>
                    <img src={conntec} alt="conntec"/>
                </div>
                    <h1>Erro 404! Página Não Encontrada.</h1>
                <Botao caminho="/" nome="Inicio"/>
            </div>
    );
 
};

export default Documento;