import { Component } from '@angular/core';


@Component({
  selector: 'portfolio-layout',
  template: `
    <md-sidenav-layout fullscreen>
      <ng-content></ng-content>
      <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    </md-sidenav-layout>
  `,
  styles: [`
    md-sidenav-layout {
      background: rgba(0, 0, 0, 0.03);
    }
    
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `]
})
export class LayoutComponent { }