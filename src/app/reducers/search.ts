import { Project } from '../models/project';
import * as project from '../actions/project';

export interface State {
  ids: string[];
  loading: boolean;
  query: string;
};

const initialState: State = {
  ids: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: project.Actions): State {
  switch (action.type) {
    case project.ActionTypes.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case project.ActionTypes.SEARCH_COMPLETE: {
      const projects = action.payload;

      return {
        ids: projects.map((project: Project) => project.id),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;