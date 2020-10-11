import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/figure.png';
import logoImg from '../../assets/logo.png';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    function handleLogin(e) {
        history.push('/login');
    }
    // async function handleLogin(e) {
    //     e.preventDefault();

    //     try{
    //         const response = await api.post('sessions', {id});
    //         localStorage.setItem('ongId', id);
    //         localStorage.setItem('ongName', response.data.name);

    //         history.push('/profile');
    //     } catch (err) {
    //       alert('Falha no login, tente novamente');
    //     }

    // }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                
                <form onSubmit={ handleLogin }>
                    <h1>Transformando quantidade em qualidade</h1>
                    
                    {/* <input 
                        placeholder="ID do produto"
                        value= {id}
                        onChange={ e => setId(e.target.value)}
                    /> */}
                    <button className="button" type="submit">Acesse com o Mercado Livre</button>
                    
                    {/* <Link className="back-link" to="/recover">
                        <FiLogIn size={16} color="#27DEBF" />
                        Não tenho código do produto
                    </Link> */}
                </form>
                
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}