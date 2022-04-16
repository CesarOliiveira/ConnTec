import React from 'react';
import {Link} from 'react-router-dom';
import './botao.css'

export default function botao(props){
    return(
        <Link to={props.caminho}>
            <div class="button-block">
                <span>{props.nome}</span>
            </div>
        </Link>
    )
}