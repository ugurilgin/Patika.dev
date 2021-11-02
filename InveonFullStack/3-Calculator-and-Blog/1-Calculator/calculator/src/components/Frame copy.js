import Header from './Header'
import {React,useState} from 'react'
import {BsList} from 'react-icons/bs'
function Frame() {
    const[calc,setCalc]=useState("");
    const[result,setResult]=useState("");
    const operators=['x','−','+','/']
    const updateCalc=value=>{
        if(value ==="C" || value ==="CE" )
        {
            setCalc("");
        }
        else if(value ==="%")
        {
            setCalc((parseFloat(calc)/100).toString());
        }
        else if(value ==="¹∕x")
        {
            setCalc((1/parseFloat(calc)).toString());
        }
        else if(value ==="x²")
        {
            setCalc((parseFloat(calc)*parseFloat(calc)).toString());
        }
        else if(value ==="√x")
        {
            setCalc((Math.sqrt(parseFloat(calc))).toString());
        }
        else if(value ==="+/-")
        {
            setCalc((parseFloat(calc)*(-1)).toString());
        }
        else{
            setCalc(calc+value);
        }
       
    }
   
    const createDigits = () => {
        const digits=[];
        const keys=['7','8','9','4','5','6','1','2','3'];
        for(let i=0;i<9;i++)
        {
            digits.push(<button className="numbers" onClick={()=>updateCalc(keys[i])} key={keys[i]}>{keys[i]}</button>);
        }
        digits.push(<button className="numbers" onClick={()=>updateCalc("+/-")} key="+/-">+/-</button>)
        digits.push(<button className="numbers" onClick={()=>updateCalc("0")}  key="0">0</button>)
        digits.push(<button className="numbers" onClick={()=>updateCalc(".")} key=".">.</button>)
        return digits
        
    }
    const createDisplayNumbers = () => {
        const digits=[];
        const keys=['MC','MR','M+','M-','MS','M🢓']
        for(let i=0;i<keys.length;i++)
        {
            digits.push(<button className="display-numbers" key={keys[i]}>{keys[i]}</button>);
        }
        return digits
        
    }
    const createRightNumerics = () => {
        const digits=[];
        const keys=['x','−','+']
        for(let i=0;i<keys.length;i++)
        {
            digits.push(<button className="numbers-right" key={keys[i]}>{keys[i]}</button>);
        }
        digits.push(<button className="numbers-equal" key="=">=</button>);
        return digits
        
    }
    const createTopNumerics = () => {
        const digits=[];
        const keys=['%','CE','C','⌫','¹∕x','x²','√x']
        for(let i=0;i<keys.length;i++)
        {
            digits.push(<button className="numbers-top" onClick={()=>updateCalc(keys[i])} key={keys[i]}>{keys[i]}</button>);
        }
        digits.push(<button className="numbers-right" key="÷">÷</button>);
        return digits
        
    }
    
    return (
        <div className="frame-box">
           <Header/>
           <div className="display">
           <div className="display-row-top">
             <p className="display-top" > <BsList  /> Standart</p>
        </div>
           <div className="display-row-middle">
        <p className="display-value-2">{result? 0 :""}</p>
        <p className="display-value">{calc || 0}</p>
    </div>
    <div className="display-row-foot">
           {createDisplayNumbers()} 
        </div>
           </div>

           <div className="numerics">
            <div className="row">
            {createTopNumerics()}
            </div>
            <div className="row">
           
                <div className="left">
                {createDigits()}
                </div>
                <div className="right">
                {createRightNumerics()}
                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default Frame
