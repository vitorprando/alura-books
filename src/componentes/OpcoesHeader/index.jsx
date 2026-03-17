import styled from "styled-components";

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

function OpcoesHeader() {
    return (
        <OpcoesContainer>
          { textoOpcoes.map((texto) => ( 
            <Opcao><p>{texto}</p></Opcao> 
            )) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;