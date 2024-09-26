import React, { useState,useEffect } from 'react'
import { useTodo } from './contexts/TodoContext';
import axios from 'axios';
function SearchTodo() {
    const [todo,setTodo] = useState("")
    const [image,setImage] = useState("")
    const { addTodo } = useTodo();

      const handleSubmit = (e) => {
          e.preventDefault();
          todo.length>0 && generateImage(todo)
          setTodo("")
      
      }
  
      const generateImage = async (prompt) => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${prompt}&client_id=73zr3wIJggS7eHxXTJg14vl3bPXf-3ZUEBxC5synNu4`);
    
         const imageUrl =  response.data.results[0].urls.raw 
          addTodo({
            text:todo,
            image:imageUrl,
            isComplete:false
          })
    
        } catch (error) {
          console.error('Error generating image:', error);
        }
      };
    
      
  return (
    <form action="">
    <div className="input-box">
    <input type="text" name="" id="" value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button className="btn" onClick={handleSubmit}>Add</button>
  </div>
  </form>
  )
}

export default SearchTodo