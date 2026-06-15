import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import Destaques from './componentes/Destaques';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <Destaques/>
    </AppContainer>
  );
}

export default Home;