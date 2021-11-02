import { useContext } from "react";
import { CalculationContext } from "../context/CalculationContext";
const CreateRightDigits = () => {
    const { handleKeyClick } = useContext(CalculationContext);
    const digits=[];
    const keys=['x','−','+']
    for(let i=0;i<keys.length;i++)
    {
        digits.push(<button className="numbers-right" onClick={()=>handleKeyClick(keys[i])} key={keys[i]}>{keys[i]}</button>);
    }
    digits.push(<button className="numbers-equal" onClick={()=>handleKeyClick("=")} key="=">=</button>);
    return digits
    
}
export default CreateRightDigits;