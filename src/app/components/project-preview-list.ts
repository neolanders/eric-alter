import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'portfolio-project-preview-list',
  template: `
   <pre>{{projects | json}}</pre>
    <portfolio-project-preview *ngFor="let project of projects" [project]="project"></portfolio-project-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class ProjectPreviewListComponent {
  @Input() projects: Project[];
}
