import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'bc-project-preview',
  template: `
    <!--<a [routerLink]="['/project', id]">-->
      <div class="panel">
        <md-card class="front card">
          <md-card-title-group>
            <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
            <md-card-title>{{ title }}</md-card-title>
            <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
          </md-card-title-group>
          <md-card-content>
            <p *ngIf="description">{{ description | bcEllipsis }}</p>
          </md-card-content>
          <md-card-footer>
            <bc-project-authors [project]="project"></bc-project-authors>
          </md-card-footer>
        </md-card>
        <md-card class="back card">
          <md-card-title-group>
            ddddd BACK
          </md-card-title-group>
          <md-card-content>
            ddddddd
          </md-card-content>
          <md-card-footer>
            6666666
          </md-card-footer>
        </md-card>
      </div>      
    <!--</a>-->
  `,
  styleUrls: ['./project-preview.scss']
})
export class ProjectPreviewComponent {
  @Input() project: Project;

  get id() {
    return this.project.id;
  }

  get title() {
    return this.project.volumeInfo.title;
  }

  get subtitle() {
    return this.project.volumeInfo.subtitle;
  }

  get description() {
    return this.project.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.project.volumeInfo.imageLinks) {
      return this.project.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
