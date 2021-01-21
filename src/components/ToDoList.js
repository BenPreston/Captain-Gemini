import { useState, useEffect } from "react";
import { db } from "../firebase_config";

import TodoListItem from "./Todo";

export default function ToDoList() {

    const [todos, setTodos] = useState([]);


    useEffect(() => {
      getTodos();
    }, []); // blank to run only on first launch
  
    function getTodos() {
      db.collection("todos").onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
    }
  

    return (
        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          />
        ))}
      </div>
    )
}
