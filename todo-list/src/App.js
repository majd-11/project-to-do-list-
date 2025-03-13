import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handletodo = () => {
    const text = inputRef.current.value; // عم بسحسب قيمة الادخال بواسة ال useref وعم نخزن القيمة بال text
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = ""; ///ليرجع يفضى الادخال بعد الضفط على اضافة
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2> To Do list</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter items..." />
        <button onClick={handletodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
