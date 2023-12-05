import { useState } from "react";

function TodoList(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo.trim() === "") return 
        setToDos((currentArray) =>[toDo,...currentArray]
        );
        setToDo("");
    };

    console.log(toDos);
    return (
    <div>
    <form onSubmit={onSubmit}>
        <h1>To do List ({toDos.length})</h1>
        <input value={toDo} placeholder="Put your today's todo" onChange={onChange}></input>
        <button>Save</button>
    </form>
    <hr />
    <ul>
        {toDos.map((todo, index)=><li key={index}>{todo}</li>)}
    </ul>
    </div>
    )
}

export default TodoList;