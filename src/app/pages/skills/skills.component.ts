import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SkillsBubblesComponent } from '../../core/components/skills-bubbles/skills-bubbles.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, SkillsBubblesComponent],
  template: `
    <div class="skills-container">
      <section id="sectionSkills" class="skills-section">
        <h2>Core Competencies</h2>
        <app-skills-bubbles></app-skills-bubbles>
      </section>

      <section class="skills-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <mat-card class="skill-category">
            <mat-card-header>
              <mat-card-title>Front-End</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <ul class="skills-list">
                <li><mat-icon>javascript</mat-icon>JavaScript</li>
                <li><mat-icon>typescript</mat-icon>TypeScript</li>
                <li><mat-icon>react</mat-icon>React</li>
                <li><mat-icon>angular</mat-icon>Angular</li>
                <li><mat-icon>html5</mat-icon>HTML5</li>
                <li><mat-icon>css3</mat-icon>CSS3</li>
                <li><mat-icon>sass</mat-icon>Sass</li>
              </ul>
            </mat-card-content>
          </mat-card>

          <mat-card class="skill-category">
            <mat-card-header>
              <mat-card-title>Back-End</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <ul class="skills-list">
                <li><mat-icon>node_js</mat-icon>Node.js</li>
                <li><mat-icon>python</mat-icon>Python</li>
                <li><mat-icon>java</mat-icon>Java</li>
                <li><mat-icon>database</mat-icon>SQL</li>
                <li><mat-icon>mongodb</mat-icon>MongoDB</li>
                <li><mat-icon>firebase</mat-icon>Firebase</li>
              </ul>
            </mat-card-content>
          </mat-card>

          <mat-card class="skill-category">
            <mat-card-header>
              <mat-card-title>DevOps & Tools</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <ul class="skills-list">
                <li><mat-icon>git</mat-icon>Git</li>
                <li><mat-icon>docker</mat-icon>Docker</li>
                <li><mat-icon>aws</mat-icon>AWS</li>
                <li><mat-icon>kubernetes</mat-icon>Kubernetes</li>
                <li><mat-icon>jenkins</mat-icon>Jenkins</li>
                <li><mat-icon>jira</mat-icon>Jira</li>
              </ul>
            </mat-card-content>
          </mat-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .skills-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .skills-section {
      margin-bottom: 3rem;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h2 {
        margin-bottom: 2rem;
        color: #1f2937;
        font-size: 2rem;
        text-align: center;
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .skill-category {
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      mat-card-header {
        margin-bottom: 1rem;
      }

      mat-card-title {
        font-size: 1.5rem;
        color: #1f2937;
      }
    }

    .skills-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        padding: 0.75rem 0;
        color: #4b5563;
        font-size: 1.1rem;

        mat-icon {
          margin-right: 1rem;
          color: #6b7280;
        }
      }
    }

    @media (max-width: 768px) {
      .skills-container {
        padding: 1rem;
      }

      .skills-section {
        padding: 1rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {} 