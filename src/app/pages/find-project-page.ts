// import 'rxjs/add/operator/let';
// import 'rxjs/add/operator/take';
// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import * as fromRoot from '../reducers';
// import * as project from '../actions/project';
// import { Project } from '../models/project';
//
//
// @Component({
//   selector: 'portfolio-find-project-page',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   template: `
//     <portfolio-project-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></portfolio-project-search>
//     <portfolio-project-preview-list [projects]="projects$ | async"></portfolio-project-preview-list>
//   `
// })
// export class FindProjectPageComponent {
//   searchQuery$: Observable<string>;
//   projects$: Observable<Project[]>;
//   loading$: Observable<boolean>;
//
//   constructor(private store: Store<fromRoot.State>) {
//     this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
//     this.projects$ = store.select(fromRoot.getSearchResults);
//     this.loading$ = store.select(fromRoot.getSearchLoading);
//
//     this.projects$.subscribe((projects) => {
//       console.log('this.projects$', projects);
//     });
//   }
//
//   search(query: string) {
//     this.store.dispatch(new project.SearchAction(query));
//   }
// }
