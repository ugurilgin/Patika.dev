import React from 'react'
import CreateDigits from '../functions/CreateDigits'
import CreateRightDigits from '../functions/CreateRightDigits'
import CreateTopDigits from '../functions/CreateTopDigits'

function Numeric() {
    return (
        <div className="numerics">
            <div className="row">
            {CreateTopDigits()}
            </div>
            <div className="row">
           
                <div className="left">
                {CreateDigits()}
                </div>
                <div className="right">
                {CreateRightDigits()}
                </div>
            </div>
        </div>
    )
}

export default Numeric
