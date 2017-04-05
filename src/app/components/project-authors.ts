import { Component, Input } from '@angular/core';

import { Project } from '../models/project';


@Component({
  selector: 'bc-project-authors',
  template: `
    <h5 md-subheader>Written By:</h5>
    <span>
      {{ authors | bcAddCommas }}
    </span>
  `,
  styles: [`
    h5 {
      margin-bottom: 5px;
    }
  `]
})
export class ProjectAuthorsComponent {
  @Input() project: Project;

  get authors() {
    return this.project.volumeInfo.authors;
  }
}
