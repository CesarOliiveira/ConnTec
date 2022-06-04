import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import './documentacao.css'
// Página da Documentação do TCC - ConnTec
function Documento(){
    return(
        <>
            <Header/>
            <main>
                <div className='wrap-content-documentation'>
                    <div className='content-documentation'>
                        <div className='title-documentation'>
                            <h1>
                                Documentação
                            </h1>
                        </div>
                        <div class='description-documentation'>
                            <p>
                                Em nossa documentação abordaremos nossos Problemas, Objetivos, Solução, Funcionalidaes, Metodos usados para a conclusão do Projeto.
                            </p>
                        </div>
                        <div className="section-button">
                                <a  className="button-download" href='#'>
                                    <div className="button">
                                        <span>Download</span>
                                    </div>
                                </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Documento;