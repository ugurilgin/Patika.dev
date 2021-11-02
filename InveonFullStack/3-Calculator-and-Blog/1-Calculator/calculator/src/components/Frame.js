import Header from './Header'
import {React,useState} from 'react'
import {BsList} from 'react-icons/bs'
import Display from './Display';
import Numeric from './Numeric';
function Frame() {
    // const[calc,setCalc]=useState("");
    // const[result,setResult]=useState("");
    // const operators=['x','−','+','/']
    // const updateCalc=value=>{
    //     if(value ==="C" || value ==="CE" )
    //     {
    //         setCalc("");
    //     }
    //     else if(value ==="%")
    //     {
    //         setCalc((parseFloat(calc)/100).toString());
    //     }
    //     else if(value ==="¹∕x")
    //     {
    //         setCalc((1/parseFloat(calc)).toString());
    //     }
    //     else if(value ==="x²")
    //     {
    //         setCalc((parseFloat(calc)*parseFloat(calc)).toString());
    //     }
    //     else if(value ==="√x")
    //     {
    //         setCalc((Math.sqrt(parseFloat(calc))).toString());
    //     }
    //     else if(value ==="+/-")
    //     {
    //         setCalc((parseFloat(calc)*(-1)).toString());
    //     }
    //     else{
    //         setCalc(calc+value);
    //     }
       
    // }
   
    
  
  
    
    
    return (
        <div className="frame-box">
           <Header/>
          <Display/>
          <Numeric/>

           
        </div>
    )
}

export default Frame
