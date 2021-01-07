import React from 'react'
import './Form.css' ;
let Form = ({todos,setTodos,input,setInput}) => 
{
    let setInputFunction=(e)=>
    {
        setInput(e.target.value);
        
    };
    let setTodosFunction=(e)=>
    {
        e.preventDefault();
        if(input)
        {
            setTodos([...todos,{id:todos.length+100,task:input}]);
            setInput("")
        }
        
    };

    return (
        <form className="form" action="POST" onSubmit={setTodosFunction} >
            <h1>Todo List</h1>
            <label>
                <input className="inputtag" value={input} type="text" placeholder="Enter New Task" onChange={(e)=>{setInputFunction(e)}}/>
                <button className="submitbutton" >Add Task</button>
            </label>
        </form>
    )
}


export default Form