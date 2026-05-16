import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

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

const ResultadosGrid = styled.div`
  width: min(1000px, 92%);
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 16px;
  justify-content: center;
`

const Resultado = styled.article`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  justify-items: center;

  p {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin: 0;
  }

  img {
    width: 100%;
    max-width: 110px;
    height: 150px;
    object-fit: contain;
  }
`

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const textoDigitado = event.target.value;
          const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      <ResultadosGrid>
        { livrosPesquisados.map( livro => (
          <Resultado>
            <img src={livro.src}/>
            <p>{livro.nome}</p>
          </Resultado>
        ) ) }
      </ResultadosGrid>
    </PesquisaContainer>
  );
}