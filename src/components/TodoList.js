import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filterdTodos }) => {
    return (
        <div className="todo-container" >
            <ul className="todo-list" >
                {filterdTodos.map(todo => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} >
                    </Todo>
                ))}
            </ul>
        </div>
    )
}

export default TodoList