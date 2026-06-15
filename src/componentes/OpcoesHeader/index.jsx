import styled from "styled-components";
import { Link } from "react-router-dom";

const OpcoesContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEOGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function OpcoesHeader() {
    return (
        <OpcoesContainer>
          { textoOpcoes.map((texto) => ( 
            <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            )) }
        </OpcoesContainer>
    )
}