import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';


@Component({
  selector: 'porfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <portfolio-layout>
      <md-sidenav-container class="example-container">
        <!--<md-sidenav #sidenav class="example-sidenav">-->
            <!--Jolly good!-->
        <!--</md-sidenav>-->
        <portfolio-sidenav callback="openSidenav" class="example-sidenav"></portfolio-sidenav> 
        <!--[open]="showSidenav$ | async" [toggle]="showSidenav$ | async"-->
        <div class="example-sidenav-content">
        <!--(click)="toggleSidenav()"-->
          <button md-button (click)="openSidenav()">
            Open sidenav
          </button>
          sssss
        </div>
        <!--<portfolio-toolbar (openMenu)="openSidenav()"></portfolio-toolbar>-->
        <!--<router-outlet></router-outlet>-->
      </md-sidenav-container>
      
       <!--<md-sidenav-container class="example-container">-->
            <!--<md-sidenav #sidenav class="example-sidenav">-->
            <!--Jolly good!-->
            <!--</md-sidenav>    -->
            <!--<div class="example-sidenav-content">-->
              <!--<button md-button (click)="sidenav.open()">-->
                <!--Open sidenav-->
              <!--</button>-->
            <!--</div>-->
       <!--</md-sidenav-container>-->
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

  toggleSidenav() {
    let that = this;
    this.showSidenav$.subscribe(function(value){
      if(!value){
        that.openSidenav();
      }else{
        that.closeSidenav();
      }
    });
  }
}
