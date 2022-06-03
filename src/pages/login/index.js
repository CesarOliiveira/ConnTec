import React from 'react';
import './login.css';

function Login(){
    return (
    <>
        <form action="">
            <div className="box">
                <div className="container-form">
                    <h1>Administrador</h1>
                    <div className="social-media">
                        <div className="media-icon">
                            <img src="imgs/google.png" alt="Google" className="google-icon"/>
                        </div>
                        <div className="media-icon">
                            <img src="imgs/face.png" alt="Facebook" className="face-icon" />
                        </div>
                    </div>
                    <div className="or-login">
                        <span className="partition">OU</span>
                    </div>
                    <div className="container-login">
                        <div className="label-float">
                            <input name="user" type="text" maxlength="255" autocomplete="on" data-t="auth-form-password-field" className="id-field" value="" required/>
                            <label for="id-field">Usuário</label>
                        </div>
                        <div className="label-float">
                            <input name="password" type="password" maxlength="255" autocomplete="on" data-t="auth-form-password-field" className="password-field" value="" required/>
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
    </>
    );
};

export default Login();