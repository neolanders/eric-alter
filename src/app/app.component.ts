import { Observable } from 'rxjs';
import { RouterOutlet, Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './core/components/sidenav.component';
import { createSelector } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { AppLoaderComponent } from './shared/components/app-loader.component';

import * as fromRoot from './reducers';
import * as fromLayout from './core/reducers/layout';
import * as layout from './core/actions/layout';

const getLayoutState = (state: fromRoot.State) => state.layout;
const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SidenavComponent,
    AsyncPipe,
    AppLoaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opts!: {
    position: string;
    barBackground: string;
  };
  showSidenav$: Observable<boolean>;
  isMobile$: Observable<boolean>;
  isLoading = true;
  showContent = false;

  constructor(
    private store: Store<fromRoot.State>,
    public breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.showSidenav$ = this.store.select(getShowSidenav);
    this.isMobile$ = this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.Small
    ]).pipe(
      map(result => result.matches)
    );
    
    // Subscribe to breakpoint changes
    this.isMobile$.subscribe(isMobile => {
      if (isMobile && this.sidenav?.opened) {
        this.sidenav.close();
      }
    });
  }

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
    };

    // Simulate initial loading
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
      this.cdr.detectChanges();
      this.router.navigate(['/']);
    }, 1500);
  }
}
