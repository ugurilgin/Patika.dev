import React from 'react'
import Todo from './Todo';
import { useTodoLayerValue } from '../context/TodoContext'
export const TodoList = ({todos}) => {
    const [{}, dispatch] = useTodoLayerValue();
    const deleteAllTodo = (todoId) => {
        dispatch({
          type: 'DELETE_ALL_TODO',
          
        });
      };
    return (
        <div className="todo-list">
            {todos && todos.map((todo) => 

                <Todo key={todo.id} todo={todo}/>
            )}

<div>
             <p className="todo-delete-all"  onClick={() => deleteAllTodo()}>Delete All</p>
        </div>
        </div>
       
    );
};
