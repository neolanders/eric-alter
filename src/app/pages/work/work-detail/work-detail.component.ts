import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectService, Project } from '../../../core/services/project.service';

@Component({
  selector: 'app-work-detail',
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
    <div class="work-detail-container" [@fadeIn]>
      <mat-card class="project-card" *ngIf="project">
        <div class="project-header">
          <div class="project-image" *ngIf="project.imageUrl">
            <img [src]="project.imageUrl" [alt]="project.title">
          </div>
          <div class="project-info">
            <h1>{{ project.title }}</h1>
            <h2>{{ project.company }}</h2>
            <p class="period">{{ project.period }}</p>
            <div class="tech-stack">
              <mat-chip *ngFor="let tech of project.techStack" 
                       class="tech-chip"
                       [disableRipple]="true">
                {{ tech }}
              </mat-chip>
            </div>
          </div>
        </div>

        <mat-card-content>
          <section class="description">
            <h3>Overview</h3>
            <p>{{ project.description }}</p>
          </section>

          <section class="responsibilities" *ngIf="project.responsibilities?.length">
            <h3>Key Responsibilities</h3>
            <ul>
              <li *ngFor="let resp of project.responsibilities">{{ resp }}</li>
            </ul>
          </section>

          <section class="achievements" *ngIf="project.achievements?.length">
            <h3>Key Achievements</h3>
            <ul>
              <li *ngFor="let achievement of project.achievements">{{ achievement }}</li>
            </ul>
          </section>
        </mat-card-content>

        <mat-card-actions>
          <button mat-button color="primary" routerLink="/">
            <mat-icon>arrow_back</mat-icon>
            Back to Projects
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .work-detail-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .project-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .project-header {
      display: flex;
      gap: 2rem;
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px 8px 0 0;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .project-image {
      flex: 0 0 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        flex: 0 0 200px;
      }
    }

    .project-info {
      flex: 1;

      h1 {
        margin: 0;
        color: #333;
        font-size: 2rem;
      }

      h2 {
        margin: 0.5rem 0;
        color: #666;
        font-size: 1.5rem;
      }

      .period {
        color: #888;
        margin: 0.5rem 0;
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

    mat-card-content {
      padding: 2rem;

      section {
        margin-bottom: 2rem;

        h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        p {
          color: #444;
          line-height: 1.6;
        }

        ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: #444;
          line-height: 1.6;

          li {
            margin-bottom: 0.5rem;
          }
        }
      }
    }

    mat-card-actions {
      padding: 1rem 2rem 2rem;
      display: flex;
      justify-content: flex-start;

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
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WorkDetailComponent implements OnInit {
  project: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(project => {
        if (project) {
          this.project = project;
        }
      });
    }
  }
} 