import React, { useState } from 'react';
import './styles.css';

import formatarNome from './../../functions/formatarNome';

function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div id="home">
      <label htmlFor="nome">Nome completo</label>

      <input
        type="text"
        name="nome"
        value={nome}
        onChange={event => setNome(event.target.value)}
        placeholder="Nome completo" />

      <button onClick={() => setNome(formatarNome(nome))}>Corrigir nome</button>

      <label htmlFor="email">Endereço eletrônico</label>

      <input
        type="email" 
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Endereço eletrônico" />
    </div>
  );
}

export default Home;