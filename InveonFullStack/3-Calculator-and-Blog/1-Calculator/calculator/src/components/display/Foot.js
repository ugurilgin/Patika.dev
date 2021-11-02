import React from 'react'
import createDisplayDigits from '../../functions/CreateDisplayDigits'

function Foot() {
    return (
        <div className="display-row-foot">
        {createDisplayDigits()} 
     </div>
    )
}

export default Foot
