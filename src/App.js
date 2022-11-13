import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { initializeShoes } from './reducers/shoesReducer';


import ShowShoes from './components/showShoes';
import ShoesData from './components/ShoesData';
import CompletaLook from './components/completeLook';
import Info from './components/info';
import './CSS/general.css'

function App() {
  const dispatch = useDispatch();
  console.log('aqui deberia')
  useEffect(() => {
    dispatch(initializeShoes())
  }, [dispatch])

  return (
    <div>
      <Container>
        <ShoesData/>
        <Row>
          <Info/>
        </Row>
        <Row>
          <h5 class="Completa">Completa tu Look</h5>
        </Row>
        <CompletaLook/>
        <ShowShoes/>
        
      </Container>
    </div>
  );
}

export default App;
