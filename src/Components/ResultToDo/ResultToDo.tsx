import React from 'react';
import "./ResultToDo.css"
import {useSelector} from "react-redux";
import ItemToDo from "./ItemToDo/ItemToDo"
import List from '@material-ui/core/List';
import {completeTask, removeTask, editTask} from '../../Redux/Actions/ToDoActions';
import {NotesState, ToDoReducerState} from '../../Redux/Reducers/ToDoReducer';
import {listItem} from '../Interface/Interface'

const ResultToDo: React.FC = () => {
  const {notes} = useSelector<ToDoReducerState["ToDoReducer"], NotesState["notes"]>(
    (store) => store.ToDoReducer
  );

  return (
    <div className="result-to-do__body">
      <List>
        {notes?.map((tasksListItem: listItem, key: number) => <ItemToDo
            tasksListItemTitle={tasksListItem.title}
            tasksListItemComplite={tasksListItem.isCompleted}
            tasksListItemId={tasksListItem.id}
            key={key}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
          />
        )}
      </List>
    </div>)
}

export default (ResultToDo)