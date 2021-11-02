import React from 'react'
import {AiOutlineMinus,AiOutlineClose} from 'react-icons/ai'
import {VscChromeMaximize} from 'react-icons/vsc'
function Header() {
    return (
        <div className="header-top">
         <p> Hesap Makinesi
        <div className="menu-buttons">
           
            <AiOutlineMinus 
            className="menu-min"
            //onClick={() => removeTodo(todo.id)}
          />
          <VscChromeMaximize 
             className="menu-max"
            //onClick={() => removeTodo(todo.id)}
          />
            <AiOutlineClose 
             className="menu-close"
            //onClick={() => removeTodo(todo.id)}
          />
           
        </div></p>
        </div>
    )
}

export default Header
