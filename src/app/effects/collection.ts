import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection';
import { Project } from '../models/project';


@Injectable()
export class CollectionEffects {
  constructor(private actions$: Actions, private db: Database) { }

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   * 
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('projects_app');
  });

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.ActionTypes.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.db.query('projects')
        .toArray()
        .map((projects: Project[]) => new collection.LoadSuccessAction(projects))
        .catch(error => of(new collection.LoadFailAction(error)))
    );

  @Effect()
  addProjectToCollection$: Observable<Action> = this.actions$
    .ofType(collection.ActionTypes.ADD_PROJECT)
    .map((action: collection.AddProjectAction) => action.payload)
    .mergeMap(project =>
      this.db.insert('projects', [ project ])
        .map(() => new collection.AddProjectSuccessAction(project))
        .catch(() => of(new collection.AddProjectFailAction(project)))
    );


  @Effect()
  removeProjectFromCollection$: Observable<Action> = this.actions$
    .ofType(collection.ActionTypes.REMOVE_PROJECT)
    .map((action: collection.RemoveProjectAction) => action.payload)
    .mergeMap(project =>
      this.db.executeWrite('projects', 'delete', [ project.id ])
        .map(() => new collection.RemoveProjectSuccessAction(project))
        .catch(() => of(new collection.RemoveProjectFailAction(project)))
    );
}