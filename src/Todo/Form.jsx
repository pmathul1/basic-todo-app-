import React from 'react'
import './Form.css' ;
let Form = ({todos,setTodos,input,setInput}) => 
{
    let setInputFunction=(e)=>
    {
        setInput(e.target.value);
        
    };
    let setTodosFunction=()=>
    {
        if(input)
        {
            setTodos([...todos,{id:todos.length+100,task:input}]);
            setInput("")
        }
        
    };

    return (
        <div className="form">
            <h1>Todo List</h1>
            <label>
                <input className="inputtag" required type="text" placeholder="Enter New Task" onChange={(e)=>{setInputFunction(e)}}/>
                <button className="submitbutton" onClick={setTodosFunction} >Add Task</button>
            </label>
        </div>
    )
}


export default Form