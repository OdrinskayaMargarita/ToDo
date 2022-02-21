import React, {useState, useEffect, useRef} from 'react';
import "./ItemToDo.css"
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Check from '@material-ui/icons/Check';
import {useDispatch} from "react-redux";
import Input from '@material-ui/core/Input';
import {log} from "util";

interface ResultToDoProps {
  tasksListItemTitle: string,
  tasksListItemComplite: boolean,
  tasksListItemId: number,

  completeTask(id: number): void,

  removeTask: (id: number) => void
  editTask: (id: number, title: string) => void
}

const ItemToDo: React.FC<ResultToDoProps> = ({
                                               tasksListItemTitle,
                                               tasksListItemComplite,
                                               tasksListItemId,
                                               completeTask,
                                               removeTask,
                                               editTask,
                                               ...props
                                             }) => {
  const dispatch = useDispatch()
  const [editStatus, setEditStatus] = useState<boolean>(true)
  const [valueInput, setValueInput] = useState<string>("")

  const changeHandler = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value)
  }

  const newValueEdit = () => {
    if (valueInput.trim().length !== 0) {
      dispatch(editTask(tasksListItemId, valueInput))
      setValueInput("")
    }
    setEditStatus(true)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      newValueEdit()
    }
  }

  return (
    <ListItem alignItems="center" className={tasksListItemComplite ? "item-text__complited-to-do" : ""}>
      <div className="item-text-check">
        <Checkbox checked={tasksListItemComplite}
                  onChange={() => dispatch(completeTask(tasksListItemId))}
        />
        {editStatus ?
          <p className={"item-text"} onClick={() => {
            setEditStatus(false)
            setValueInput(tasksListItemTitle)
          }}> {tasksListItemTitle} </p>
          : <Input autoFocus={true}
                   placeholder="Edit your to do"
                   color="secondary"
                   onChange={changeHandler}
                   value={valueInput}
                   onKeyPress={keyPressHandler}
          />
        }
      </div>
      <div className="items-del-complite">
        {editStatus
          ? <EditIcon color='primary' fontSize='small'
                      onClick={() => {
                        setEditStatus(false)
                        setValueInput(tasksListItemTitle)
                      }}/>
          : <Check color='primary' fontSize='default'
                   onClick={() => {
                     newValueEdit()
                   }}
          />
        }
        <DeleteIcon color='error' fontSize='small'
                    onClick={() => dispatch(removeTask(tasksListItemId))}
        />
      </div>
    </ListItem>
  );
}

export default ItemToDo;