import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="skills-container">
      <h1>Skills</h1>
      <div class="skills-grid">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Frontend Development</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <ul>
              <li>Angular</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>HTML/CSS/SCSS</li>
            </ul>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Backend Development</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>SQL/NoSQL</li>
            </ul>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>DevOps & Tools</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: white;
      margin-bottom: 2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    mat-card {
      background-color: #1a1a1a;
      color: white;
    }

    mat-card-title {
      color: #64ffda;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      padding: 0.5rem 0;
      color: #e0e0e0;
    }
  `]
})
export class SkillsComponent {} 