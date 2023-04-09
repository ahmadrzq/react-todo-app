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

const Todos = ({todos}) => {
    return(
        <div>
            {todos.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default Todos;