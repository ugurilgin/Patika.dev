import { useContext } from "react";
const CreateDisplayDigits = () => {
    
    const digits=[];
    const keys=['MC','MR','M+','M-','MS','M🢓']
    for(let i=0;i<keys.length;i++)
    {
        digits.push(<button className="display-numbers" key={keys[i]}>{keys[i]}</button>);
    }
    return digits
    
}
export default CreateDisplayDigits;