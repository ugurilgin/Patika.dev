import React, { useState, createContext } from "react";
import { BsEyeglasses } from "react-icons/bs";

export const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [calc, setCalc] = useState("");
  const [operator, setOperator] = useState("");
  const [isEqual, setIsEqual] = useState(false);
  const [fontSizes, setFontSize] = useState("");
  const handleKeyClick = (key) => {
   
    const ops=["+","−","x","÷",".","-","/","*"]
    const ops2=["1","2","3","4","5","6","7","8","9","0"]
   if( ops.includes(key) && calc=== '' || ops.includes(key) && ops.includes(calc.slice(-1)) )
   {
setCalc((calc) => {
  return calc ;
}); 
   }
    else if(key ==="C" || key ==="CE" )
    { setOperator("");
      setCalc((calc) => {
        return "";
      });
    }
    else if(key ==="%")
    {setOperator("");
      setCalc((calc) => {
      return (parseFloat(calc)/100).toString();
    }); 
       
    }
    else if(key ==="¹∕x")
    {
      setOperator("");
      setCalc((calc) => {
        return (1/parseFloat(calc)).toString();
      });  
     
    }
    else if(key ==="x²")
    {
      setOperator("");
      setCalc((calc) => {
        return (parseFloat(calc)*parseFloat(calc)).toString();
      });
    }
    else if(key ==="√x")
    {
      setOperator("");
      setCalc((calc) => {
        return (Math.sqrt(parseFloat(calc))).toString();
      });
       
    }
    else if(key ==="+/-")
    {
      setOperator("");
      setCalc((calc) => {
        return (parseFloat(calc)*(-1)).toString();
      });
        
    }
    else if(key==="⌫")
    {
      setOperator("");
      if (calc !== "0" || calc !== 0) {
        setCalc(calc.toString().substring(0, calc.length - 1))
        if (calc.length === 1) setCalc("0")
      }
    }
    else if(key ==="÷")
    {
      setCalc((calc) => {
        setIsEqual(false);
        return calc + "/";
      });
        
    }
    else if(key ==="−")
    {
      setCalc((calc) => {
        setIsEqual(false);
        return calc + "-";
      });
        
    }
    else if(key ==="x")
    {
      setCalc((calc) => {
        setIsEqual(false);
        return calc + "*";
      });
        
    }
    else if(key ==="+")
    {
      setCalc((calc) => {
        setIsEqual(false);
        return calc + "+";
      });
        
    }
    else if(key === "=")
    {
     
        
      setCalc((calc) => {
        setIsEqual(true);
        setOperator(calc+" =");
        return (eval(calc).toString());
      });
        
    }
    else{
      setCalc((calc) => {
        if(isEqual)
        { setIsEqual(false);return  key;}
        else{ return calc + key;}
       
      });
    }
       
    if(ops2.includes(key))
    {
      try{
        
        setOperator(eval(calc+key).toString())
      }
      catch{
        setCalc((calc) => {
          return "";
        });
      }
    }
    
     if(calc.length>=36   )
      {
        setFontSize(20);
      }
      else if (calc.length>=24 && calc.length<36)
      {
        setFontSize(25);

      }
      else if (calc.length>=18 && calc.length<24)
      {
        setFontSize(30);

      }
      else if (calc.length>=12 && calc.length<18)
      {
        setFontSize(40);
        
      }
      else
      {
        setFontSize(50);
      }
    
  };

  return (
    <CalculationContext.Provider
      value={{
        calc,
        setCalc,
        handleKeyClick,
        operator,
        setOperator,
        fontSizes,
        setFontSize,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};
export default CalculationProvider;