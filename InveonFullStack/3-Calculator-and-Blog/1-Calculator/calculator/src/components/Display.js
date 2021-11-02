import React from 'react'
import Foot from './display/Foot'
import Middle from './display/Middle'

import Top from './display/Top'

function Display() {
    return (
        <div className="display">
          <Top/>
          <Middle/>
          <Foot/>  
        </div>
    )
}

export default Display
