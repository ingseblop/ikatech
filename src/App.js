import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { initializeShoes } from './reducers/shoesReducer';


import ShowShoes from './components/showShoes';
import ShoesData from './components/ShoesData';
import CompletaLook from './components/completeLook';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initializeShoes())
  },[dispatch])

  return (
    <div>
      <Container>
        <ShoesData/>
        <Row>
          info
        </Row>
        <Row>
          Completa tu look
        </Row>
        <Row>
          <CompletaLook/>
        </Row>
        <ShowShoes/>
        
      </Container>
    </div>
  );
}

export default App;
