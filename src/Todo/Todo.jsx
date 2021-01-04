import {React,useState} from 'react'
import Form from './Form';
import ShowForm from './ShowForm';
import "../css/Todo.css"
let Todo = ()=>
{
    let [todos,setTodos]=useState([]);
    let [input,setInput]=useState("");

    return (
    <div className="todoapp">
    <Form todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
    <ShowForm className="showform" todos={todos} setTodos={setTodos}/> 
    </div>
    )
}
export default Todo;