import Header from '../components/Header';
import Pesquisa from '../components/Pesquisa';
import Destaques from '../components/Destaques';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52, #326589);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Favoritos;