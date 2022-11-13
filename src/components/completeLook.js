import Shoe from "./Shoe"
import { useSelector } from "react-redux"
import { Row } from "react-bootstrap"

const CompletaLook = () => {
    const shoes = useSelector(state => state.shoes)
    const temp1 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    const temp2 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    
    return(
        <Row>
            <Shoe key={1} props={temp1}/>
            <Shoe key={2} props={temp2}/>
        </Row>
    )
}

export default CompletaLook