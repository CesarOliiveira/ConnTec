import React from 'react';
import './footer.css'

//Criando a Parte do Footer/RodaPé do Site
export default function footer(){
    return(
    <>
        <footer className = "ft-main">
                <div className = "ft-box">
                    <div className = "ft-img-box">
                            
                        <div className = "ft-logo">
                        <p> Imagem </p>

                        </div>

                        <div className = "ft-logo">
                        <p> Imagem </p>
                        </div>

                    </div>

                    <div className = "ft-img-box">

                        <div className = "ft-img">
                        <p> Icon </p>
                        </div> 

                        <div className = "ft-img">
                        <p> Icon </p>
                        </div> 

                        <div className = "ft-img">
                        <p> Icon </p>
                        </div> 

                        <div className = "ft-img">
                        <p> Icon </p>
                        </div>

                    </div>
                </div>

                <div className = "ft-box ft-height">
                    <div className = "ft-colum">
                        <p>Título1</p>
                        <ul className='ft-link'>
                            <li><a href='#'>link 1</a></li>
                            <li><a href='#'>link 2</a></li>
                            <li><a href='#'>link 3</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p>Título2</p>
                        <ul className='ft-link'>
                            <li><a href='#'> link 4</a></li>
                            <li><a href='#'> link 5</a></li>
                            <li><a href='#'> Termos de uso</a></li>
                        </ul>
                    </div>

                    <div className = "ft-colum">
                        <p>Desenvolvido por:</p>
                        <ul className='ft-link'>
                            <li><a href='#'>Equipe: NomeDaEquipe</a></li>
                            <li><a href='#'>Em parceria com: Etec <br/>
                            Taboão da Serra - SP</a></li>
                        </ul>
                    </div>

                    

                </div>
        </footer>  
    </>
    );
}