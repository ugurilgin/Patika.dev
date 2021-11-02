import {React,useContext, useState} from 'react'
import { CalculationContext } from '../../context/CalculationContext';

function Middle() {
    const  {calc, operator,fontSizes}  = useContext(CalculationContext);
    return (
        <div className="display-row-middle">
        <p className="display-value-operator">{operator? operator :""}</p>
        <br/>
        <p className="display-value" style={{fontSize:fontSizes}}>{calc || 0}</p>
    </div>
    )
}

export default Middle
