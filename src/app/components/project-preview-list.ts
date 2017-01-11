import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'bc-project-preview-list',
  template: `
    <bc-project-preview *ngFor="let project of projects" [project]="project"></bc-project-preview>
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
