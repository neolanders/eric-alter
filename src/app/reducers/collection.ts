import { createSelector } from 'reselect';
import * as collection from '../actions/collection';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.ActionTypes.LOAD_SUCCESS: {
      const projects = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: projects.map(project => project.id)
      };
    }

    case collection.ActionTypes.ADD_PROJECT_SUCCESS:
    case collection.ActionTypes.REMOVE_PROJECT_FAIL: {
      const project = action.payload;

      if (state.ids.indexOf(project.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, project.id ]
      });
    }

    case collection.ActionTypes.REMOVE_PROJECT_SUCCESS:
    case collection.ActionTypes.ADD_PROJECT_FAIL: {
      const project = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== project.id)
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;