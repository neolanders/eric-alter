import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="projects-container">
      <h1>Projects</h1>
      <div class="projects-grid">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Portfolio Website</mat-card-title>
            <mat-card-subtitle>Angular, Material Design</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>A modern, responsive portfolio website built with Angular and Material Design.</p>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="primary" href="https://github.com/yourusername/portfolio" target="_blank">
              <mat-icon>code</mat-icon>
              View Code
            </a>
            <a mat-button color="accent" href="https://your-portfolio.com" target="_blank">
              <mat-icon>launch</mat-icon>
              Live Demo
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>E-commerce Platform</mat-card-title>
            <mat-card-subtitle>React, Node.js, MongoDB</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>A full-stack e-commerce platform with user authentication and payment processing.</p>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="primary" href="https://github.com/yourusername/ecommerce" target="_blank">
              <mat-icon>code</mat-icon>
              View Code
            </a>
            <a mat-button color="accent" href="https://your-ecommerce.com" target="_blank">
              <mat-icon>launch</mat-icon>
              Live Demo
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Task Management App</mat-card-title>
            <mat-card-subtitle>Angular, Firebase</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>A real-time task management application with collaborative features.</p>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="primary" href="https://github.com/yourusername/task-manager" target="_blank">
              <mat-icon>code</mat-icon>
              View Code
            </a>
            <a mat-button color="accent" href="https://your-task-manager.com" target="_blank">
              <mat-icon>launch</mat-icon>
              Live Demo
            </a>
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

    h1 {
      text-align: center;
      color: white;
      margin-bottom: 2rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    mat-card {
      background-color: #1a1a1a;
      color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    mat-card-header {
      margin-bottom: 1rem;
    }

    mat-card-title {
      color: #64ffda;
    }

    mat-card-subtitle {
      color: #e0e0e0;
    }

    mat-card-content {
      flex: 1;
      p {
        color: #e0e0e0;
        line-height: 1.6;
      }
    }

    mat-card-actions {
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }

    a {
      text-decoration: none;
    }
  `]
})
export class ProjectsComponent {} 