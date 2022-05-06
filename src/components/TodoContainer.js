import React from "react";
import Header from "./Header";
import TodoList from "./TodoList"
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    }

    handleChange = (id)=>{

        /*
            React does not guarantee that this.state written within the setState is uptodate
            React therefore advices that we should not rely on value to calculate the next state as it may result in unintentended output.
        */
        // this.setState({
        //     todos: this.state.todos.map(todo => {
        //         if(todo.id == id){
        //             todo.completed = !todo.completed
        //         } 
        //         return todo
        //     })
        // })

        /*
            updated
        */
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id == id){
                    return { ...todo, completed: !todo.completed}
                }
                return todo
            })
        }))
    }

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id!=id)]
        })
    }

    addTodoItem = title => {
        const id = this.state.todos.length
        const newTodo = { id: id+1, title: title, completed: false }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        return (
            <div>
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
                
            </div>
        )
    }
}

export default TodoContainer