import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { Image } from 'react-bootstrap';

const Shoe = ({props}) => {
    const cargarImagen = require.context("../img", true);

    return (
        <Col sm={12} md={3}>
            <Image src={cargarImagen(`./${ props.foto }`)}
            class="img-fluid" width="100%" height="200"/>
            <p class="text-center">{props.nombre}</p>
            <p class="text-center">$ {props.precio}</p>
            <div  class="d-grid mx-auto">
                <Button variant='dark' >
                    AGREGAR AL CARRITO
                </Button>
            </div>
        </Col>
    )
}

export default Shoe;