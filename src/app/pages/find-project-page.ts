import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import * as project from '../actions/project';
import { Project } from '../models/project';


@Component({
  selector: 'bc-find-project-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-project-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></bc-project-search>
    <bc-project-preview-list [projects]="projects$ | async"></bc-project-preview-list>
  `
})
export class FindProjectPageComponent {
  searchQuery$: Observable<string>;
  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    this.projects$ = store.select(fromRoot.getSearchResults);
    this.loading$ = store.select(fromRoot.getSearchLoading);
  }

  search(query: string) {
    this.store.dispatch(new project.SearchAction(query));
  }
}
