import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';
import * as project from '../actions/project';

/**
 * Note: Container components are also reusable. Whether or not 
 * a component is a presentation component or a container
 * component is an implementation detail.
 * 
 * The View Project Page's responsibility is to map router params
 * to a 'Select' project action. Actually showing the selected
 * project remains a responsibility of the 
 * SelectedProjectPageComponent
 */
@Component({
  selector: 'bc-view-project-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-selected-project-page></bc-selected-project-page>
  `
})
export class ViewProjectPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .map(id => new project.SelectAction(id))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
