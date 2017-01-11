import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as collection from '../actions/collection';
import { Project } from '../models/project';


@Component({
  selector: 'bc-selected-project-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-project-detail
      [project]="project$ | async"
      [inCollection]="isSelectedProjectInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-project-detail>
  `
})
export class SelectedProjectPageComponent {
  project$: Observable<Project>;
  isSelectedProjectInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.project$ = store.select(fromRoot.getSelectedProject);
    this.isSelectedProjectInCollection$ = store.select(fromRoot.isSelectedProjectInCollection);
  }

  addToCollection(project: Project) {
    this.store.dispatch(new collection.AddProjectAction(project));
  }

  removeFromCollection(project: Project) {
    this.store.dispatch(new collection.RemoveProjectAction(project));
  }
}
