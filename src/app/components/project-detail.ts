import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';


@Component({
  selector: 'bc-project-detail',
  template: `
    <md-card *ngIf="project">
      <md-card-title-group>
        <md-card-title>{{ title }}</md-card-title>
        <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
        <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
      </md-card-title-group>
      <md-card-content>
        <p [innerHtml]="description"></p>
      </md-card-content>
      <md-card-footer class="footer">
        <bc-project-authors [project]="project"></bc-project-authors>
      </md-card-footer>
      <md-card-actions align="end">
        <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(project)">
        Remove Project from Collection
        </button>

        <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(project)">
        Add Project to Collection
        </button>
      </md-card-actions>
    </md-card>

  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    md-card {
      max-width: 600px;
    }
    md-card-title {
      margin-left: 10px;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
      margin-bottom: 125px;
    }
    md-card-actions {
      margin-bottom: 0 !important;
      margin-right: 0;
    }
    md-card-footer {
      padding: 0 25px 25px;
    }
  `]
})
export class ProjectDetailComponent {
  /**
   * Presentational components receieve data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */
  @Input() project: Project;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Project>();
  @Output() remove = new EventEmitter<Project>();


  /**
   * Tip: Utilize getters to keep templates clean
   */
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

  get thumbnail() {
    return this.project.volumeInfo.imageLinks.smallThumbnail;
  }
}
