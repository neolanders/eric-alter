import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'portfolio-project-search',
  template: `
    <md-card>
      <md-card-title>Find a Project</md-card-title>
      <md-card-content>
        <input mdInput placeholder="Search for a book" [value]="query" (keyup)="search.emit($event.target.value)">
        <md-spinner [class.show]="searching"></md-spinner>
      </md-card-content>
    </md-card>
  `,
  styleUrls: ['./project-search.scss']
})
export class ProjectSearchComponent {
  @Input() query: string = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
}
