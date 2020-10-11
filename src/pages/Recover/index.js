import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import logoImg from '../../assets/logo.png';

 export default function Recover () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRecover(e){
        e.preventDefault(); 

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        try{
            const response = await api.post('products', data);
            alert(`A ID do seu produto é: ${response.data.id}`); 

            history.push('/');
            
        } catch(err) {
            alert('Erro na recuperação, tente novamente'); 
        }
    }

     return (
         <div className="recover-container">
             <div className="content">
                 <section>
                     <img src={logoImg} alt="/"/>
                     <h1>Recuperar ID do produto</h1>
                     <p>Preencha os campos com suas informações para recuperar a ID do seu produto</p>
                     <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#27DEBF"/>
                        Já tenho a ID do produto
                     </Link>
                 </section>
                 <form onSubmit={ handleRecover }>
                    <input 
                        placeholder="CPF" 
                        value= {name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email" placeholder="E-mail"
                        value= {email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input placeholder="Data da compra"
                        value= {whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Nome do produto"
                            value= {city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="Qtd" style={{ width:80 }} 
                            value= {uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit" >Recuperar ID</button>
                 </form>
             </div>
         </div>
     )
 }