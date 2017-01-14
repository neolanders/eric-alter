import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';


@Component({
  selector: 'project-collection-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <portfolio-layout>
      <portfolio-sidenav [open]="showSidenav$ | async">
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/" icon="book" hint="View my works">
          My Work
        </portfolio-nav-item>
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/project/find" icon="search" hint="Find my projects">
          Browse Projects
        </portfolio-nav-item>
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/resume" icon="book" hint="My Resume">
          Resume
        </portfolio-nav-item>
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/details" icon="create" hint="Why this portfolio">
          This portfolio
        </portfolio-nav-item>
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/contact" icon="contact mail" hint="Contact me">
          Contact
        </portfolio-nav-item>
        <portfolio-nav-item (activate)="closeSidenav()" routerLink="/playground" icon="chrome reader mode" hint="Playground">
          Playground
        </portfolio-nav-item>
      </portfolio-sidenav>
      <portfolio-toolbar (openMenu)="openSidenav()">
        Eric Alter 
      </portfolio-toolbar>
      <router-outlet></router-outlet>
    </portfolio-layout>
  `
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our 
     * application.
     */
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
