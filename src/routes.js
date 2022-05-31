import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Inicio from './pages/inicio'
import Documento from './pages/documento';
import Sobrenos from './pages/sobrenos';
import Error from './exceptions/404';

//Criando as funções dr Rotas do Site. Exemplo: www.conntec.com.br/documento.
export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/documento" element={<Documento />}/>
                <Route path="/sobrenos" element={<Sobrenos />}/>
                <Route path="/admin" element={<h1>Página em desenvolvimento</h1>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
      
        </>
        
    );
};
