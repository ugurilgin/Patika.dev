
import { useContext } from "react";
import { CalculationContext } from "../context/CalculationContext";

const CreateDigits = () => {
  
    const { handleKeyClick } = useContext(CalculationContext);

    const digits=[];
    const keys=['7','8','9','4','5','6','1','2','3'];
    for(let i=0;i<9;i++)
    {
        digits.push(<button className="numbers" onClick={()=>handleKeyClick(keys[i])} key={keys[i]}>{keys[i]}</button>);
    }
    digits.push(<button className="numbers" onClick={()=>handleKeyClick("+/-")} key="+/-">+/-</button>)
    digits.push(<button className="numbers" onClick={()=>handleKeyClick("0")}  key="0">0</button>)
    digits.push(<button className="numbers" onClick={()=>handleKeyClick(".")} key=".">.</button>)
    return digits
    
}
export default CreateDigits;