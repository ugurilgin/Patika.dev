import { useContext } from "react";
import { CalculationContext } from "../context/CalculationContext";

const CreateTopDigits = () => {
    const { handleKeyClick } = useContext(CalculationContext);
    const digits=[];
    const keys=['%','CE','C','⌫','¹∕x','x²','√x']
    for(let i=0;i<keys.length;i++)
    {
        digits.push(<button className="numbers-top" onClick={()=>handleKeyClick(keys[i])} key={keys[i]}>{keys[i]}</button>);
    }
    digits.push(<button className="numbers-right" onClick={()=>handleKeyClick("÷")} key="÷">÷</button>);
    return digits
    
}
export default CreateTopDigits;