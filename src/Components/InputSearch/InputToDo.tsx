import React, {useState} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {objTaskNote} from "../Interface/Interface";

import "./InputToDo.css";

interface NewNoteInputProps {
  addTask(note: objTaskNote): void;
}

const InputToDo: React.FC<NewNoteInputProps> = ({ addTask }) => {
  const [valueInput, setValueInput] = useState<String>('')

  const changeHandler = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value)
  }

  const saveTarget = () => {
    addTask({
      id: (new Date()).getTime(),
      title: valueInput,
      isCompleted: false
    })
    setValueInput("")
  }

  const keyPressHandler = ({key}: React.KeyboardEvent) => {
    if(key === "Enter" && valueInput?.trim().length) saveTarget()
  }

  const handleClick = () => {
    if(valueInput?.trim().length) saveTarget()
  }

  return (
    <div className="search-body">
      <Input autoFocus={true}
      placeholder="Enter your to do"
      color="secondary"
      onChange={changeHandler}
      value={valueInput}
      onKeyPress={keyPressHandler}
      />
      <Button color="secondary" variant='outlined' size='medium' onClick={handleClick}>Save</Button>
    </div>
  );
}

export default (InputToDo);
