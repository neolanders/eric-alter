import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectService, Project } from '../../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  template: `
    <div class="projects-container">
      <h2>Professional Experience</h2>
      <div class="projects-grid">
        <mat-card class="project-card" *ngFor="let project of projects" [@fadeIn]>
          <div class="project-image" *ngIf="project.imageUrl">
            <img [src]="project.imageUrl" [alt]="project.title">
          </div>
          <mat-card-content>
            <h3>{{ project.title }}</h3>
            <h4>{{ project.company }}</h4>
            <p class="period">{{ project.period }}</p>
            <p class="description">{{ project.description }}</p>
            <div class="tech-stack">
              <mat-chip *ngFor="let tech of project.techStack" 
                       class="tech-chip"
                       [disableRipple]="true">
                {{ tech }}
              </mat-chip>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" [routerLink]="['/work', project.id]">
              View Details
              <mat-icon>arrow_forward</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .project-image {
      height: 200px;
      overflow: hidden;
      border-radius: 4px 4px 0 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    mat-card-content {
      flex: 1;
      padding: 1.5rem;

      h3 {
        margin: 0;
        color: #333;
        font-size: 1.5rem;
      }

      h4 {
        margin: 0.5rem 0;
        color: #666;
        font-size: 1.2rem;
      }

      .period {
        color: #888;
        margin: 0.5rem 0;
      }

      .description {
        color: #444;
        margin: 1rem 0;
        line-height: 1.6;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .tech-chip {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    mat-card-actions {
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
} 