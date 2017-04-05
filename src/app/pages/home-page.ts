import 'rxjs/add/operator/let';
import { ViewEncapsulation } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import { Project } from '../models/project';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My Portfolio</md-card-title>
    </md-card>    
    <bc-project-preview-list [projects]="projects$ | async"></bc-project-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styleUrls: ['./app.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {
  projects$: Observable<Project[]>;

  constructor(store: Store<fromRoot.State>) {
    this.projects$ = store.select(fromRoot.getProjectCollection);
  }
}
