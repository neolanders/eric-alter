import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'portfolio-project-preview',
  template: `
      <div class="panel">
        <mat-card class="front card">
          <mat-card-title-group>
            <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
            <mat-card-title>{{ title }}</mat-card-title>
            <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
          </mat-card-title-group>
          <mat-card-content>
            <p *ngIf="description">{{ description | bcEllipsis }}</p>
          </mat-card-content>
          <mat-card-footer>
            <bc-project-authors [project]="project"></bc-project-authors>
          </mat-card-footer>
        </mat-card>
        <mat-card class="back card">
          <mat-card-title-group>
            ddddd BACK
          </mat-card-title-group>
          <mat-card-content>
            <div id="cboxLoadedContent">
                <div class="row">
                    <div class="col s6 m6">
                        <img src="images/work/jrichardhill_screenshot.jpg" alt="">
                    </div>
                    <div class="col s6 m6">
                        <h3 class="project-title" itemprop="name">Project Leadify</h3>
                        <div class="project-tags">
                          <i class="fa fa-tag fa-lg"></i>
                          <span class="tag" itemprop="keywords">HTML/CSS</span>
                          <span class="tag" itemprop="keywords">Hybird App</span>
                          <span class="tag" itemprop="keywords">Ionic</span>
                          <span class="tag" itemprop="keywords">UX Design</span>
                        </div>
                        <p class="project-description light p-lg" itemprop="description">                                
                            CRM web application built with Ionic, node.js, angular and cordova. 
                            I took part as the core designer and UI developer for this project. 
                            This was built in a group of 5 in effort for a Hackathon 
                            contest within my employment at Move, Inc., which at the end recieved 
                            the People's Choice award in Jan 2015.
                        </p>
                        <br><br>
                        <a href="http://jrichardhill.com/" target="_blank">
                            <div class="md-button-ripple">LAUNCH WEBSITE</div>
                        </a>
                        <a [routerLink]="['/project', id]" class="waves-effect waves-light btn">
                            <i class="material-icons">cloud</i>ADD TO FAVORITE
                        </a>
                    </div>
                </div>
            </div>
          </mat-card-content>
          <mat-card-footer>
            6666666
          </mat-card-footer>
        </mat-card>
      </div>
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
