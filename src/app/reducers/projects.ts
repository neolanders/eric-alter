import { createSelector } from 'reselect';
import { Project } from '../models/project';
import * as project from '../actions/project';
import * as collection from '../actions/collection';

export interface State {
  ids: string[];
  entities: { [id: string]: Project };
  selectedProjectId: string | null;
};

const initialState: State = {
  ids: [],
  entities: {},
  selectedProjectId: null,
};

export function reducer(state = initialState, action: project.Actions | collection.Actions): State {
  switch (action.type) {
    case project.ActionTypes.SEARCH_COMPLETE:
    case collection.ActionTypes.LOAD_SUCCESS: {
      const projects = action.payload;
      const newProjects = projects.filter((project: Project) => !state.entities[project.id]);

      const newProjectIds = newProjects.map((project: Project) => project.id);
      const newProjectEntities = newProjects.reduce((entities: { [id: string]: Project }, project: Project) => {
        return Object.assign(entities, {
          [project.id]: project
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newProjectIds ],
        entities: Object.assign({}, state.entities, newProjectEntities),
        selectedProjectId: state.selectedProjectId
      };
    }

    case project.ActionTypes.LOAD: {
      const project = action.payload;

      if (state.ids.indexOf(project.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, project.id ],
        entities: Object.assign({}, state.entities, {
          [project.id]: project
        }),
        selectedProjectId: state.selectedProjectId
      };
    }

    case project.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedProjectId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedProjectId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});