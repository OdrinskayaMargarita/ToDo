import {TaskActionTypes} from "../../types";
import {ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK} from "../constants";
import {objTaskNote} from '../../Components/Interface/Interface'

export const addTask = (task: objTaskNote): TaskActionTypes => ({
    type: ADD_TASK,
    objTask: task,
  })

export const removeTask = (id: number): TaskActionTypes => ({
  type: REMOVE_TASK,
  id:id,
});

export const completeTask = (id: number): TaskActionTypes => ({
  type: COMPLETE_TASK,
  id: id,
});

export const editTask = (id: number,title: string): TaskActionTypes => ({
  type: EDIT_TASK,
  id: id,
  title: title,
});
