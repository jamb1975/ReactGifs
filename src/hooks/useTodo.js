import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const  useTodo = () => {

      const [todos, dispatch] = useReducer(todoReducer, initialState, init)
        useEffect(() => {
    
            localStorage.setItem('todos', JSON.stringify(todos))
    
        }, [todos])
    
        const handleNewTodo = ( todo ) =>{
        
        console.log('Add todo orgi=>', todo);
    
        const action = {
            type: 'Add todo',
            payload: todo
        }
    
        dispatch(action);
       };
    
       const handleRemoveTodo = ( id ) =>{
        
        const action = {
            type: 'Remove todo',
            payload: id
        }
    
        dispatch(action);
       }; 
    
       const handleToggleTodo = ( id ) =>{
      
        const action = {
            type: 'Toggle todo',
            payload: id
        }
    
        dispatch(action);
    
       };

       const todosCount = todos.length;
       const pendingTodosCount = todos.filter(todo => !todo.done).length;
       
       return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
       }

}