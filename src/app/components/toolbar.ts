import { Component, Output, EventEmitter } from '@angular/core';
import { AppMenuService } from '../services/app.menu.service';

@Component({
  selector: 'portfolio-toolbar',
  styleUrls: ['./toolbar.scss'],
    template: `
      <mat-toolbar color="primary" class="toolbar">
        <div class="al-user-profile">
          <a routerLink="/"><img src="https://avatars1.githubusercontent.com/u/1858504?v=3&s=460"></a>
        </div>
        <button mat-icon-button (click)="openMenu.emit()">
          <mat-icon>menu</mat-icon>
        </button> 
        <span class="hide-on-med-and-down header-menu"  layout="row" layout-align="space-around center">
          <button *ngFor="let link of items" routerLink="{{link.routerLink}}">{{ link.label }}</button> 
        </span>
      </mat-toolbar>
    `
})
export class ToolbarComponent {
  private items: any;

  @Output() openMenu = new EventEmitter();

  constructor(private as: AppMenuService){
   this.items = this.as.getMenu();
  }
}
