import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ShoesData = () => {
    const cargarImagen = require.context("../img", true);
    const shoes = useSelector(state => state.shoes)
    console.log(shoes)
    const shoe = shoes.find((element,index)=> index===0)
    console.log(shoe)
    return(
        <Row>
            <Col sm={12} md={6}>
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="img-fluid" width="100%"/>
                <hr/>
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="img-fluid" width="20" height="20"/>
            </Col>
            <Col sm={12} md={6}>
                <Row>
                    <Stack>
                        <h4>{shoe.nombre}</h4>
                        <span>${shoe.precio}</span>
                        <span> Cod. de producto{shoe.referencia}</span>
                    </Stack>
                </Row>
            <Row>
                <p>COLOR</p>
                <br/>
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="img-fluid" width="30" height="30"/>
            </Row>
            <Row>
                <p>TALLA</p>
                <Row>
                    <span width="30" height="30">5</span>
                    <span width="30" height="30">5.5</span>
                    <span width="30" height="30">6</span>
                    <span width="30" height="30">6.5</span>
                    <span width="30" height="30">7</span>
                </Row>
                <Row>
                    <span width="30" height="30">7.5</span>
                    <span width="30" height="30">8</span>
                    <span width="30" height="30">8.5</span>
                    <span width="30" height="30">9</span>
                    <span width="30" height="30">9.5</span>
                </Row>
            </Row>
            <Row>
                <span>GUIA DE TALLAS</span>
                <Button variant="dark">AÑADIR AL CARRITO</Button>
            </Row>
            </Col>
        </Row>
    )
}

export default ShoesData