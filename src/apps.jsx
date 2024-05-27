import { useEffect, useReducer, useState } from "react";

const App = () => {

  const [todos,setTodos] = useState([]);

  useEffect((_) => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const respond = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await respond.json();
    setTodos(data)
    
  };

  return(
    <section>
      <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(todo=>(
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? <p className="done">Done</p> : <p className="none">None</p>}</td>
            </tr>
            
          ))
        }
      </tbody>
    </table>
    </section>
  )

};

export default App;
