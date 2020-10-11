import React, { useState} from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import CameraComponent from './Camera.js';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value: user,
        };

        if(data.title, data.description, data.value){
            try{
                await api.post('incidents', data, {
                    headers: {
                        Authorization: ongId,
                    }
                })
                history.push('/profile');
            } catch(err) {
                alert('Erro ao cadastrar caso, tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos')
        }
       
    }

    const [displayQuestion, setDisplayQuestion] = useState(null);

    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="/"/>
                    <h1>Cadastrar devolução</h1>
                    <p>Descreva o caso detalhadamente para sua devolução ser mais ágil.</p>
                    <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16} color="#27DEBF"/>
                       Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident }>
                    <select name="" id="" value={title} onChange= { e => setTitle(e.target.value)}>
                        <option value="">Justificativa</option>
                        <option value="Produto danificado">Produto danificado</option>
                        <option value="Desistência da Compra">Desistência da Compra</option>
                        <option value="Troca">Troca</option>
                    </select>
                  
                   <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange= { e => setDescription(e.target.value)}
                    />
                    <select name="" id="" value={user} onChange= { e => setUser(e.target.value)}>
                        <option value="">Escolha seu tipo de usuário</option>
                        <option value="Comprador">Comprador</option>
                        <option value="Vendedor">Vendedor</option>
                    </select>
                    <input type="button" value="Adicionar fotos" onClick={ e => setDisplayQuestion('teste')} />
                    {displayQuestion && 
                        <CameraComponent></CameraComponent>
                    } 
                   <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}