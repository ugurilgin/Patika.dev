export const initialState={

     todos: JSON.parse(localStorage.getItem("todos")),
     
    
};


export const reducer=(state,action)=>{
    console.log(action)
    switch(action.type)
    {
        case 'ADD_TODO':
                try {
                    localStorage.setItem("todos", JSON.stringify([action.payload, ...state.todos]));
                } catch (error) {
                    localStorage.setItem("todos", JSON.stringify([action.payload]));
                }
                if(state.todos===null)
                {
                   state = { todos : [] };
       
                }
        return {
         
         ...state,
        todos: [action.payload, ...state.todos],
         
        
        
      };
      case 'DELETE_ALL_TODO':
        localStorage.setItem("todos",JSON.stringify([]));
      return {
        ...state,
        todos: [],
      };
    case 'REMOVE_TODO':
        localStorage.setItem("todos", JSON.stringify([...state.todos].filter((todo) => todo.id !== action.payload)));
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    case 'UPDATE_TODO':
        localStorage.setItem("todos", JSON.stringify(state.todos.map((todo) => {
            if (todo.id !== action.payload.todoId) {
              return todo;
            }
  
            return {
              ...todo,
              content: action.payload.newValue,
            };
          })));
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }

          return {
            ...todo,
            content: action.payload.newValue,
          };
        }),
      };
    case 'COMPLETE_TODO':
        localStorage.setItem("todos", JSON.stringify(state.todos.map((todo) => {
            if (todo.id !== action.payload) {
              return todo;
            }
  
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          })));
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };
        default:
            return{...state};
    }
};
export default reducer;