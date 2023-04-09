import React from "react";
import TodoItem from "./TodoItem";
// const Todos = () => {
//     return (
//         <div>
//            {props.todos.map((todo)=>{
//             return <p key={todo.id}>{todo.title}</p>
//            })}
//         </div>
//     );
// }

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
}

export default Todos;