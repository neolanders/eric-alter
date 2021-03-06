import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'portfolio-nav-item',
  template: `
    <a mat-list-item [routerLink]="routerLink" (click)="activate.emit()">
      <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      <span mat-line><ng-content></ng-content></span>
      <span mat-line class="secondary">{{ hint }}</span>
    </a>
  `,
  styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class NavItemComponent {
  @Input() icon: string = '';
  @Input() hint: string = '';
  @Input() routerLink: string | any[] = '/';
  @Output() activate = new EventEmitter();
}
