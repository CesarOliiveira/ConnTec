import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Inicio from './pages/inicio'
import Documento from './pages/documento';
import Sobrenos from './pages/sobrenos';
import Login from './pages/login';

//Criando as funções dr Rotas do Site. Exemplo: www.conntec.com.br/documento.
export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/documento" element={<Documento />}/>
                <Route path="/admin" element={<Login />}/>
                <Route path="/sobrenos" element={<Sobrenos />}/>
                <Route path="*" element={<h1>Página não Encontrada</h1>}/>
            </Routes>
      
        </>
        
    );
};
