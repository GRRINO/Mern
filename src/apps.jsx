import { useEffect, useReducer, useState } from "react";

const App = () => {

  const [id,setId] = useState([]);
  const [error,setError] =useState(false);
  const [todo,setTodo] = useState(undefined);

  const getData = async (e) =>{
    e.preventDefault();
    if(id < 1){
      setError(true);
      setId("");
      return
    }
    const respond = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await respond.json();
    setError(false)
    setTodo(data)
    setId("");
  }
  return(
    <section>
      <form onSubmit={getData}>
      <input type="number" value={id} onChange={(e) => {setId(e.target.value)} } />
      <button type="submit">Get Data</button>
      </form>
      <div>
      
        {error && <h1>Please Enter a invalid id.(example 1,2,3,etc ...) </h1>}
        {todo && 
        (<div>
          <h1>id - {todo.id}</h1>
          <h1>title - {todo.title}</h1>
          <h1>userId - {todo.userId}</h1>
          <h1>completed - {todo.completed ? <span>completed</span> : <span>notCompleted</span>}</h1>
        </div>)}
      </div>
    </section>
  )

};

export default App;
