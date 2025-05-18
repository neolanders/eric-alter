import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  template: `
    <div class="project-detail" *ngIf="project">
      <div class="project-header">
        <div class="project-info">
          <h1>{{ project.title }}</h1>
          <div class="project-meta">
            <span class="company">{{ project.company }}</span>
            <span class="period">{{ project.period }}</span>
          </div>
        </div>
        <img [src]="project.imageUrl" [alt]="project.title" class="project-image">
      </div>

      <div class="project-content">
        <section class="description">
          <h2>Overview</h2>
          <p>{{ project.description }}</p>
        </section>

        <section class="tech-stack" *ngIf="project.techStack?.length">
          <h2>Tech Stack</h2>
          <div class="tech-chips">
            <mat-chip *ngFor="let tech of project.techStack">
              {{ tech }}
            </mat-chip>
          </div>
        </section>

        <section class="responsibilities" *ngIf="project.responsibilities?.length">
          <h2>Key Responsibilities</h2>
          <ul>
            <li *ngFor="let resp of project.responsibilities">
              <mat-icon>check_circle</mat-icon>
              <span>{{ resp }}</span>
            </li>
          </ul>
        </section>

        <section class="achievements" *ngIf="project.achievements?.length">
          <h2>Key Achievements</h2>
          <ul>
            <li *ngFor="let achievement of project.achievements">
              <mat-icon>star</mat-icon>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .project-detail {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .project-header {
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;
      align-items: flex-start;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
      }
    }

    .project-info {
      flex: 1;

      h1 {
        margin: 0 0 1rem;
        color: #333;
        font-size: 2.5rem;
      }
    }

    .project-meta {
      display: flex;
      gap: 1rem;
      color: #666;
      font-size: 1.1rem;

      .company {
        font-weight: 500;
        color: #1976d2;
      }
    }

    .project-image {
      width: 400px;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      @media (max-width: 768px) {
        width: 100%;
        height: 200px;
      }
    }

    .project-content {
      display: grid;
      gap: 3rem;
    }

    section {
      h2 {
        color: #333;
        margin: 0 0 1.5rem;
        font-size: 1.8rem;
      }
    }

    .description p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #444;
    }

    .tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      mat-chip {
        background: #e3f2fd;
        color: #1976d2;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: #444;

        mat-icon {
          color: #1976d2;
          margin-top: 0.2rem;
        }
      }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(project => {
        this.project = project;
      });
    }
  }
} 