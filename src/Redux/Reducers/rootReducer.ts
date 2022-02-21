import {combineReducers} from 'redux';
import { ToDoReducer } from "./ToDoReducer"

export const rootReducer = combineReducers({ ToDoReducer })

export type RootState = ReturnType<typeof rootReducer>;