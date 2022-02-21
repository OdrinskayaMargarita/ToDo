import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK} from '../constants';
import {TaskActionTypes} from '../../types';
import {objTaskNote} from "../../Components/Interface/Interface";

export interface NotesState {
  notes: any
}

export interface ToDoReducerState {
  ToDoReducer: any
}

const initialState = {
  notes: []
}

export const ToDoReducer = (state: NotesState = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ADD_TASK : {
      return {...state, notes: [...state.notes, action.objTask]}
    }
    case REMOVE_TASK: {
      return (
        {
          ...state,
          notes: state.notes.filter((elem: any) => (elem.id !== action.id) && elem)
        })
    }
    case COMPLETE_TASK: {
      return (
        {
          ...state,
          notes: state.notes.filter((elem: any) => {
            if (elem.id === action.id) {
              elem.isCompleted = !elem.isCompleted
              return elem
            } else return elem
          })
        })
    }
    case EDIT_TASK: {
      return (
        {
          ...state,
          notes: state.notes.filter((elem: any) => {
            if (elem.id === action.id) {
              elem.title = action.title
              return elem
            } else return elem
          })
        })
    }
    default:
      return state;
  }
}
