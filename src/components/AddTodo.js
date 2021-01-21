import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "firebase";

import { db } from '../firebase_config'

export default function AddTodo() {

    const [todoInput, setTodoInput] = useState("");
    
    function addTodo(e) {
        e.preventDefault();
    
        db.collection("todos").add({
          inprogress: true,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          todo: todoInput,
        });
    
        setTodoInput("");
      }

    return (
        <div>
            <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
 
        </div>
    )
}
