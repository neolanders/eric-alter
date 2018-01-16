import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as layout from '../actions/layout';


@Component({
  selector: 'porfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <mat-drawer-container fullscreen>
      <mat-drawer #sidenav><!--slimScroll [options]="opts"-->
        <portfolio-sidenav (openMenu)="sidenav.toggle()"></portfolio-sidenav>
      </mat-drawer> 
      <portfolio-toolbar (openMenu)="sidenav.toggle()"></portfolio-toolbar>
      <router-outlet></router-outlet>           
    </mat-drawer-container>
  `
})
export class AppComponent {
  opts: any;
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {}


  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: '#000000'
    }
  }
}
