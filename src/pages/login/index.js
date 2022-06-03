import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Face from './../../img/face.png';
import Google from './../../img/google.png';
import Logo from './../../img/conntec.png'
import './login.css';

function Login(){
    return (
    <>
        
        <main className='main-admin'>
            <div className='logo-conntec' style={{position: 'absolute', display: 'flex', width: "100%", justifyContent: 'center', top: '20px' }}>
                <img src={Logo} alt="conntec" width={220} style={{justifyContent: 'center'}}/>

            </div>
            <form action='diasuasd'>
                <div className="box">
                    <div className="container-form">
                        <h1>Administrador</h1>
                        <div className="social-media">
                            <div className="media-icon">
                                <img src={Google} alt="Google" className="google-icon"/>
                            </div>
                            <div className="media-icon">
                                <img src={Face} alt="Facebook" className="face-icon" />
                            </div>
                        </div>
                        <div className="or-login">
                            <span className="partition">OU</span>
                        </div>
                        <div className="container-login">
                            <div className="label-float">
                                <input name="user" type="text" maxlength="255" autocomplete="on" data-t="auth-form-password-field" className="id-field" required/>
                                <label for="id-field">Usuário</label>
                            </div>
                            <div className="label-float">
                                <input name="password" type="password" maxlength="255" autocomplete="on" data-t="auth-form-password-field" className="password-field" required/>
                                <label for="password-field">Senha</label>
                            </div>
                            <div role="button" className="btn-login">
                                <input type="submit" className="button-submit"/>
                                <strong><span>LOGIN</span></strong>
                            </div>
                            <span className="remember-password"><a href="#">ESQUECEU A SENHA?</a></span>
                        </div>
                    </div>
                </div>
            </form>
        </main>
        
    </>
    );
};

export default Login;