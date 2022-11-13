import Shoe from "./Shoe"
import { useSelector } from "react-redux"
const CompletaLook = () => {
    const shoes = useSelector(state => state.shoes)
    const temp1 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    const temp2 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    const temp3 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    const temp4 = shoes.find((element,index)=> index===Math.floor(Math.random() * shoes.length))
    
    return(
        <div>
            <Shoe props={temp1}/>
            <Shoe props={temp2}/>
            <Shoe props={temp3}/>
            <Shoe props={temp4}/>
        </div>
    )
}

export default CompletaLook