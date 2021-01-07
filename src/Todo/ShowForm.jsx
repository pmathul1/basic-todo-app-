import React from 'react'
import Li from './Li';
import '../css/ShowForm.css'

 let ShowForm= ({todos,setTodos})=>
 {
    return (
        <div className="showform">
        {todos.map((event,index)=>(<Li key={index} event={event} index={index} todos={todos} setTodos={setTodos} />))}
        </div>
    )
}
export default ShowForm;