import React from 'react';
import './footer.css'

//Criando a Parte do Footer/RodaPé do Site
export default function footer(){
    return(
    <>
            <footer>
                <div className='hdbox-footer'>
                    <div className='info'>
                        <p>Quer falar conosco? Ligue 0000-0000</p>
                        <div class="contact-us">
                            <h2>Contatos</h2>
                            <ul>
                                <li>WhatsApp</li>
                                <li>Facebook</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <p>© Copyright by -ConnTec </p>
                </div>
            </footer>
    </>
    );
}