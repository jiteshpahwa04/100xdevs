import { useEffect, useState } from "react";
import axios from 'axios'

export function useTodos(n){
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const value = setInterval(() => {
        setTimeout(()=>{
          axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
              setTodos(res.data.todos);
              setLoading(false);
            })
        },2000);
      }, n*1000);
  
      setTimeout(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
          .then(res => {
            setTodos(res.data.todos);
            setLoading(false);
          })
      },2000);
  
      return ()=>{
        clearInterval(value);
      }
    }, [n])
  
    return {todos, loading};
  }