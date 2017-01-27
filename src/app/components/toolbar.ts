import { Component, Output, EventEmitter } from '@angular/core';
import { AppMenuService } from '../services/app.menu.service';

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
      </md-toolbar> 
      <md-nav-list class="hide-on-med-and-down">
          <md-list-item *ngFor="let link of items">
              <a md-line routerLink="{{link.routerLink}}">{{ link.label }}</a>
              <button md-icon-button>
                  <md-icon>info</md-icon>
              </button>
            </md-list-item>
      </md-nav-list>
    `
})
export class ToolbarComponent {
  private items: any;

  @Output() openMenu = new EventEmitter();

  constructor(private as: AppMenuService){
   this.items = this.as.getMenu();
  }
}