import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK } from './Redux/constants';

// Actions
interface IAddTaskAction {
    type: typeof ADD_TASK,
    objTask: any,
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK,
    id:number,
}

interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK,
    id: number,
}

interface IEdit {
    type: typeof EDIT_TASK,
    id: number,
    title: string,
}

export type TaskActionTypes = IAddTaskAction | ICompleteTaskAction | IRemoveTaskAction | IEdit;