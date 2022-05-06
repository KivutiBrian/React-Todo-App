import React from "react";

function TodoItem(props){
    return <li style={{listStyle: "None"}}> 
    <input type="checkbox" checked={props.todo.completed} onChange={ ()=> props.handleChangeProps(props.todo.id) }/> 
    { props.todo.title } 
    
    <button onClick={ ()=> props.deleteTodoProps(props.todo.id)}>Delete</button>
    </li> 

}

// class TodoItem extends React.Component {
//     render(){
//         return <li>{ this.props.todo.title }</li>
//     }
// }

export default TodoItem