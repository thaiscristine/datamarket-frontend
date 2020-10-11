import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import '../../global.css';

import logoMl from '../../assets/ml-logo@2x.png';

 export default function Login () {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [passwordScreen, setPasswordScreen] = useState('');
    
    const history = useHistory();

    function handleLoginAndPassword(){
        
        if(senha, email){
            history.push('/products');
        }
    }
    function handleLogin(email){
        if(email) {
            setPasswordScreen(email);
            const elementEmail = document.querySelector('.email');
            elementEmail.style.display = "none";
        }
    }

     return (
         <div className="login-container">
            <header>
                <img src={logoMl} alt="/"/>
                <Link to="/login">Contato</Link>
            </header>
            <div className="content">
                <form onSubmit={ handleLoginAndPassword }>
                    <div className="email">
                        <p>Olá! Para continuar, digite o seu e-mail ou usuário</p>
                        <div className="group">      
                            <input type="text" value={email} onChange= { e => setEmail(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>E-mail ou usuário</label>
                        </div>
                        <a className="button" onClick={() => handleLogin(email)} >Continuar</a>
                        {/* onClick= { ()=> {setPasswordScreen(email)}} */}
                        <Link to="/login" className="newAccount">Criar conta</Link>
                    </div>

                    { passwordScreen && 
                    <>
                        <p>Agora, a sua senha</p>
                        <div>{email}</div>  
                        <div className="group">    
                            
                            <input type="text" value={senha} onChange= { e => setSenha(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Senha</label>
                        </div>
                        <button className="button" type="submit" >Entrar</button>
                        <Link to="/login" className="newAccount">Não sei a minha senha</Link>
                    </>
                    }
                </form>
            </div>
         </div>
     )
 }