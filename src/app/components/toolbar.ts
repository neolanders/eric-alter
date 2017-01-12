import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'portfolio-toolbar',
  styleUrls: ['./toolbar.scss'],
  template: `
    <md-toolbar color="primary">
      <div class="al-user-profile">
          <img src="https://avatars1.githubusercontent.com/u/1858504?v=3&s=460">
      </div>
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}