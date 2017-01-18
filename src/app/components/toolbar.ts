import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'portfolio-toolbar',
  styleUrls: ['./toolbar.scss'],
  template: `
    <md-toolbar color="primary" class="toolbar">
      <div class="al-user-profile">
        <a routerLink="/"><img src="https://avatars1.githubusercontent.com/u/1858504?v=3&s=460"></a>
      </div>
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <span>Eric Alter</span>
    </md-toolbar>
  `
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}