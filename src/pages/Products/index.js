import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiEdit } from 'react-icons/fi';

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import './styles.css'

export default function Products() {

    const [products, setProducts] = useState([]);
    
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    /*
    async function getProductsFrosmApi() {
        try {
          let response = await fetch('https://run.mocky.io/v3/b83e97fe-eb4d-43a1-ab1f-052c01938e0a');
          let responseJson = await response.json();
          console.log(responseJson);
          return responseJson.produtos;
         } catch(error) {
          console.error(error);
        }
    }
    */

    /* tivemos dificuldades acessando a API da ML, então criamos um mocky para simular nosso produto */
    useEffect(() => {
        fetch('https://run.mocky.io/v3/b83e97fe-eb4d-43a1-ab1f-052c01938e0a')
        .then(response => response.json())
        .then(data => setProducts(data.products));
        
    }, []);

    async function handleDevolucao(idProduct){
        
    }
    // async function handleDeleteIncident(idProduct){
    //     try {
    //         await api.delete(`products/${idProduct}`, {
    //             headers: {
    //                 Authorization: ongId
    //             }
    //         }); 

    //         setProducts(products.filter(product => product.idProduct !== idProduct));
    //     }catch(err) {
    //         alert('Erro ao deletar caso, tente novamente.');
    //     }
    // }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt=""/>
                {/* <span>Bem-vinda, { ongName }</span> */}
                <Link className="button" to="/incidents/new">Cadastrar devolução</Link>
                <button onClick={handleLogout } type="button">
                    <FiPower size={18} color="#27DEBF" />
                </button>
            </header>
            <h1>Algum Problema com o seu produto?</h1>
            <ul>
                { products.map(product => (
                    <li key={product.idProduct}>
                        <strong>Produto</strong>
                        <p>{ product.name }</p>
                        
                        <strong>Data de entrega</strong>
                        <p>{ product.dataEntrega }</p>

                        <strong>Vendedor</strong>
                        <p>{ product.supplier}</p>

                        <strong>Status</strong>
                        <p>{ product.status}</p>                        

                        <button onClick={() => handleDevolucao(product.idProduct)} type="button">
                            <FiEdit size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}