import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';


@Component({
  selector: 'bc-project-detail',
  template: `
    <mat-card *ngIf="project">
      <mat-card-title-group>
        <mat-card-title>{{ title }}</mat-card-title>
        <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
        <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
      </mat-card-title-group>
      <mat-card-content>
        <p [innerHtml]="description"></p>
      </mat-card-content>
      <mat-card-footer class="footer">
        <bc-project-authors [project]="project"></bc-project-authors>
      </mat-card-footer>
      <mat-card-actions align="end">
        <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(project)">
        Remove Project from Collection
        </button>
        <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(project)">
        Add Project to Collection
        </button>
      </mat-card-actions>
    </mat-card>

  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    mat-card {
      max-width: 600px;
    }
    mat-card-title {
      margin-left: 10px;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    mat-card-content {
      margin-top: 15px;
      margin-bottom: 125px;
    }
    mat-card-actions {
      margin-bottom: 0 !important;
      margin-right: 0;
    }
    mat-card-footer {
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
