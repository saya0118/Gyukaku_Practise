import React, {useState}  from 'react';
import Map from './components/Map'

const App = () => {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState("")

  const onChange = (event) => {
    setInput(event.target.value)
  }

  const onHandleAdd = () => {
    setList([...list, input])
    setInput("")
  }

  const onHandleDelete = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  const onHandleEdit = (index) => {
    setIsEditing(index);
    const item = list[index];
    setInput(item);
  }

  const onHandleUpdate = (index) => {
    const updated = [...list];
    updated[index] = input;
    setList(updated);
    setInput("");
    setIsEditing(false);
  }


  return (
    <div className="App">
      <input value={input} type="text" onChange={onChange}></input>
      <button onClick={onHandleAdd}>Add</button>
      <ul>
       <Map 
        onHandleUpdate={onHandleUpdate}
        onHandleEdit={onHandleEdit}
        onHandleDelete={onHandleDelete}
        list={list}
        isEditing={isEditing}
      />
      </ul>
    </div>
  );
}

export default App;
