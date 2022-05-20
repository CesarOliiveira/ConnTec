import React from 'react';
import './footer.css'

//Criando a Parte do Footer/RodaPé do Site
export default function footer(){
    return(
    <>
        <footer className = "ft-main">
            <div className = "ft-container">
                <div className = "ft-box">
                    <div className = "ft-img-box">
                            
                        <div className = "ft-logo">
                        <> </>

                        </div>

                        <div className = "ft-logo">
                        <> </>
                        </div>

                    </div>

                    <div className = "ft-img-box">

                        <div className = "ft-img">
                            <> </>
                        </div> 

                        <div className = "ft-img">
                        <> </>
                        </div> 

                        <div className = "ft-img">
                        <> </>
                        </div> 

                        <div className = "ft-img">
                        <> </>
                        </div>

                    </div>
                </div>

                <div className = "ft-box ft-height">
                    <div className = "ft-colum">
                        <p className = 'ft-link bold'>Título</p>
                        <ul className='ft-link'>
                            <li><a href='#'>link 1</a></li>
                            <li><a href='#'>link 2</a></li>
                            <li><a href='#'>link 3</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p className = 'ft-link bold'>Título</p>
                        <ul className='ft-link'>
                            <li><a href='#'>link 4</a></li>
                            <li><a href='#'>link 5</a></li>
                            <li><a href='#'>Termos de uso</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p className = 'ft-link bold'>Desenvolvido por</p>
                        <ul className='ft-link'>
                            <li>Equipe: NomeDaEquipe</li>
                            <li>Em parceria com: Etec</li>
                            <li>Taboão da Serra - SP</li>
                        </ul>
                    </div>

                    

                </div>
            </div>
        </footer>  
    </>
    );
}