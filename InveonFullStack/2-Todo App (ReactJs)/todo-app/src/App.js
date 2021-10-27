import React, { useState } from 'react'
import { TodoList } from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext'
import './App.css';
export const App = () => {
  const [{todos},dispatch]=useTodoLayerValue();
  const [content,setContent]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(!content && content.length<1) return;
    const newTodo={
      id:Math.floor(Math.random()*15641856156),
      content,
      isCompleted:false
    };
    dispatch({
      type:"ADD_TODO",
      payload:newTodo,
    });
  };
  return (
   
<div className="container">
<h1>Todo List </h1>
      
   
   <form onSubmit={handleSubmit} className="todo-form">
   
     <input className="todo-input" onChange={event=>setContent(event.target.value)} value={content} /> 
     <button className="todo-button" > Add</button>
   </form>
  
   {
     <TodoList todos={todos}/>

   }
  
   </div>

  )
}
export default App;