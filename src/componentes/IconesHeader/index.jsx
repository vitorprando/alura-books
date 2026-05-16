import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconesContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const icones = [perfil, sacola]

export default function IconesHeader() {
    return (
        <IconesContainer>
          { icones.map((icone) => ( 
            <Icone><img src={icone}/></Icone> 
            )) }
        </IconesContainer>
    )
}