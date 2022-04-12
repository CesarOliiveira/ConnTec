import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Inicio from './pages/inicio'
import Documento from './pages/documento';
import Error from './exceptions/404';

//Criando as funções dr Rotas do Site. Exemplo: www.conntec.com.br/documento.
export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/documento" element={<Documento />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
      
        </>
        
    );
};
