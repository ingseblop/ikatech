import Row from 'react-bootstrap/Row';

const texto1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, sapien vitae tempus rhoncus, augue quam varius felis, in maximus mi justo nec orci. Aenean ut est enim. Curabitur pharetra auctor tempor. Ut eget lobortis lacus. Praesent laoreet eros in tellus interdum, nec efficitur nunc dictum. Aenean nec venenatis orci, sed rutrum massa. Vivamus semper, lorem in feugiat dignissim, nisi tellus mollis nisi, et consectetur lorem libero quis sapien. Sed euismod urna lorem, ut mattis lectus lobortis quis. Vivamus egestas dolor id magna eleifend, et aliquet leo dictum."
const texto2 = "Proin pretium auctor massa in vestibulum. Morbi eget rutrum justo, quis hendrerit leo. Vestibulum cursus hendrerit ultricies. Praesent fringilla nisi sit amet augue faucibus, ut dignissim odio tincidunt. In porta vulputate lorem vel luctus. Etiam vulputate mauris ac semper auctor. Sed vulputate eu sem aliquet dignissim. Phasellus ipsum magna, aliquet sit amet ipsum quis, dignissim egestas enim. Donec mattis ut lorem id maximus. Fusce id erat fermentum, cursus sapien vestibulum, semper turpis. Fusce lacinia ligula ut tellus tempus ultrices. Nullam euismod, lacus eget hendrerit venenatis, diam ligula feugiat nunc, sed venenatis lectus sem sed urna. Mauris at massa orci."
const Info = () => {
    return(
        <div>
            <Row>
                <h4>Detalles</h4>
                <hr/>
                <p>{texto1}</p>
            </Row>
            <Row>
                <h4>Tecnología</h4>
                <hr/>
                <p>{texto2}</p>
            </Row>

        </div>
    )
}

export default Info