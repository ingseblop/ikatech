import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import '../CSS/general.css'

const ShoesData = () => {
    
    const shoes = useSelector(state => state.shoes)
    console.log(shoes)
    const shoe = shoes.find((element,index)=> index===0)
    const cargarImagen = require.context("../img", true)
    console.log(shoe)
    return(
        <Row>
            <Col sm={12} md={6}>
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="img-fluid" width="100%"/>
                <hr/>
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="img-fluid" width="40" height="40"/>
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
                <Image src={cargarImagen(`./${shoe.foto}`)}
                class="col-2" width="30" height="30"/>
            </Row>
            <Row>
                <p>TALLA</p>
                <Row>
                    <Stack direction="horizontal" gap={1}>
                        <span class="Talla">5</span>
                        <span class="Talla">5.5</span>
                        <span class="Talla">6</span>
                        <span class="Talla">6.5</span>
                        <span class="Talla">7</span>
                    </Stack>
                </Row>
                <Row>
                    <Stack direction="horizontal" gap={1}>
                        <span class="Talla">7.5</span>
                        <span class="Talla">8</span>
                        <span class="Talla">8.5</span>
                        <span class="Talla">9</span>
                        <span class="Talla">9.5</span>
                    </Stack>
                </Row>
            </Row>
            <Row>
                <span>GUIA DE TALLAS</span>
                <div className='col-6'>
                    <Button variant="dark">AÑADIR AL CARRITO</Button>
                </div>
            </Row>
            </Col>
        </Row>
    )
}

export default ShoesData