import Row from 'react-bootstrap/Row';
import Shoe from './Shoe'
import { useSelector } from 'react-redux';

const ShowShoes = () => {
    const shoes = useSelector(state => state.shoes)
    console.log('aqui')

    return (
        <Row>
            <p>PRODUCTOS RECOMENDADOS</p>
            <hr/>
            {shoes.map((shoe,index) =>
                <Shoe key={index} props = {shoe} />)
            }
        </Row>
    )
}

export default ShowShoes