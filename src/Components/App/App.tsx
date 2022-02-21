import React from 'react';
import InputToDo from "../InputSearch/InputToDo";
import ResultToDo from "../ResultToDo/ResultToDo";
import Container from '@material-ui/core/Container';
import {useDispatch} from "react-redux";
import "./App.css";
import { addTask } from "../../Redux/Actions/ToDoActions"
import {objTaskNote} from '../Interface/Interface'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const onAddNote = (objTask: objTaskNote) => {
    dispatch(addTask(objTask))
  };

  return (
    <div className="body-to-do">
      <Container>
        <div className="App">
          <InputToDo addTask={onAddNote}/>
          <ResultToDo />
        </div>
      </Container>
    </div>
  );
}

export default App;
