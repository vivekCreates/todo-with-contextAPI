import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:Date.now() , 
            image:"./cat.jpg",
            text:"Exercise",
            isComplete:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo:(todo,id) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {}
});


export const TodoProvider = TodoContext.Provider;



export const useTodo = () => {
    return useContext(TodoContext)
}