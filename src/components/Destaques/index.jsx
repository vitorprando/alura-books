import { livros } from './dadosDestaques';
import { Titulo } from '../Titulo';
import CardRecomendacao from '../CardRecomendacao';
import imagemLivro from '../../images/livro2.png';
import styled from 'styled-components';

const DestaquesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function Destaques() {
    return (
        <DestaquesContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">
                DESTAQUES
            </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => {
                    return <img src = {livro.src} alt={livro.titulo}/>;
                })}
            </NovosLivrosContainer>
            <CardRecomendacao 
                titulo="Talvez você também goste de..." 
                subtitulo="Angular 11" 
                descricao="Conheça o framework mais popular do mercado para desenvolvimento de aplicações web." 
                img={imagemLivro} 
            />
        </DestaquesContainer>
    )
}