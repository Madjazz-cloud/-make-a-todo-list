import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [taskDraft, setTaskDraft] = useState({
    todoTitle: '',
    completed: false
  });
  const [list, setList] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    setList([taskDraft, ...list]);
    setTaskDraft({ ...taskDraft, todoTitle: '' });
    /*Was macht ...taskDraft? Ganz wichtig: ...taskDraft = das Objekt das bisher angelegt wurde, alles was dann danach folgt, überschreibt den Inhalt des bisherigen Objects in dem man die Porperties anspricht und nach belieben ändert. Somit wird der vorangegangene WErt überschrieben. z.B. hätte ich auch einfach nach ...taskDraft completed: true schreiben können, dann wäre der neue WErt in dem Objekt true statt false. 


    /* setList ist dafür zuständig, dass neue Dinge in die Liste mitauflgenommen werden und zugleich die alten Dinge mitangezeigt werden. Wenn diese Punkte (...) nicht da wären, dann würden die davor geschrieben Dinge verschwinden */
  };
  return (
    <div>
      <header>
        TO-DO-LIST
        {/* Das onSubmit = handleSubmit bewirktt, dass das geschriebene als Input genommen und oben in der liste dargestellt wird  */}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="add TODO"
              value={taskDraft.todoTitle}
              onChange={event =>
                setTaskDraft({ ...taskDraft, todoTitle: event.target.value })
              }
              //event = nichts anderes als ein Mausklick oder ein Tastendruck, target = nichts anders als ein Textfeld oder ein Häckchen das ich ankreuzen kann. Eben etwas bei dem ich einen Wert durch z.B. klicken angebe, value = der Wert der dann z.B. in einem Textfeld (target) drinn steht also das geschriebene Wort oder der Buchstabe.
            ></input>
          </label>
        </form>
        <ul>
          {list.map((task, key) => (
            <li
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {key}:{task.todoTitle}
              <button
                onClick={function strikeTodo() {
                  const newList = [...list];
                  newList[key].completed = !newList[key].completed;

                  setList(newList);
                }}
              >
                complete
              </button>
              <button
                onClick={function deleteTodo() {
                  const newList = [...list];

                  newList.splice(key, 1);
                  setList(newList);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
