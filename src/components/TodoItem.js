import React from "react";
import styles from "./TodoItem.module.css"

function TodoItem(props) {

    const { id, title, completed } = props.todo

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    return <li className={styles.item}>
        <input
            type="checkbox"
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
            className={styles.checkbox}
        />
        
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>

        <span style={completed ? completedStyle : null}>
            {title}
        </span>
    </li>

}

// class TodoItem extends React.Component {
//     render(){
//         return <li>{ this.props.todo.title }</li>
//     }
// }

export default TodoItem