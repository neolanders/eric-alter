import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'portfolio-project-search',
  template: `
    <mat-card>
      <mat-card-title>Find a Project</mat-card-title>
      <mat-card-content>
        <input mdInput placeholder="Search for a book" [value]="query" (keyup)="search.emit($event.target.value)">
        <mat-spinner [class.show]="searching"></mat-spinner>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./project-search.scss']
})
export class ProjectSearchComponent {
  @Input() query: string = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
}
