import React from 'react'
import "../css/Li.css"
 let Li = ({event,index,todos,setTodos})=>
 {
    let removeTodo=()=>
    {
        setTodos(todos.filter(i=>i.id!==event.id))
    }
    return (
        <div>
            <div className="card">
            <div className="carddivparent">
            <div>
             <p>{event.task}</p>
            </div>
            </div>
            <button className="done" onClick={removeTodo}>Done</button>
            </div>
        </div>
       
    )
}
export default Li;