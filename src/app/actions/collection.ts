import { Action } from '@ngrx/store';
import { Project } from '../models/project';
import { type } from '../util';

export const ActionTypes = {
  ADD_PROJECT:             type('[Collection] Add Project'),
  ADD_PROJECT_SUCCESS:     type('[Collection] Add Project Success'),
  ADD_PROJECT_FAIL:        type('[Collection] Add Project Fail'),
  REMOVE_PROJECT:          type('[Collection] Remove Project'),
  REMOVE_PROJECT_SUCCESS:  type('[Collection] Remove Project Success'),
  REMOVE_PROJECT_FAIL:     type('[Collection] Remove Project Fail'),
  LOAD:                    type('[Collection] Load'),
  LOAD_SUCCESS:            type('[Collection] Load Success'),
  LOAD_FAIL:               type('[Collection] Load Fail'),
};


/**
 * Add PROJECT to Collection Actions
 */
export class AddProjectAction implements Action {
  type = ActionTypes.ADD_PROJECT;

  constructor(public payload: Project) { }
}

export class AddProjectSuccessAction implements Action {
  type = ActionTypes.ADD_PROJECT_SUCCESS;

  constructor(public payload: Project) { }
}

export class AddProjectFailAction implements Action {
  type = ActionTypes.ADD_PROJECT_FAIL;

  constructor(public payload: Project) { }
}


/**
 * Remove PROJECT from Collection Actions
 */
export class RemoveProjectAction implements Action {
  type = ActionTypes.REMOVE_PROJECT;

  constructor(public payload: Project) { }
}

export class RemoveProjectSuccessAction implements Action {
  type = ActionTypes.REMOVE_PROJECT_SUCCESS;

  constructor(public payload: Project) { }
}

export class RemoveProjectFailAction implements Action {
  type = ActionTypes.REMOVE_PROJECT_FAIL;

  constructor(public payload: Project) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Project[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddProjectAction
  | AddProjectSuccessAction
  | AddProjectFailAction
  | RemoveProjectAction
  | RemoveProjectSuccessAction
  | RemoveProjectFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
