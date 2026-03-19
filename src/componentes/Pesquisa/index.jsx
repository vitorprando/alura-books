import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';

const PesquisaContainer = styled.section`
  color: #FFF;
  text-align: center;
  height: 270px;
  width: 100%;
  padding: 85px 0;
`

const Titulo = styled.h2`
  font-size: 36px;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 40px;
`

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState('');

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => setTextoDigitado(event.target.value)}
      />
      <p>{textoDigitado}</p>
    </PesquisaContainer>
  );
}

export default Pesquisa;