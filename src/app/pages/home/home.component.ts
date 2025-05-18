import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader.component';
import { CarouselComponent } from '../../shared/components/carousel.component';
import { SkillsBubblesComponent } from '../../core/components/skills-bubbles/skills-bubbles.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SkeletonLoaderComponent,
    CarouselComponent,
    SkillsBubblesComponent
  ],
  template: `
    <div class="home-container" [class.loaded]="isLoaded">
      <section class="hero-section">
        <app-carousel></app-carousel>
        <div class="hero-content">
          <div class="hero-section-header">
            <h1 class="title">Eric Alter</h1>
            <p class="subtitle">Senior Front-End | Full-Stack Engineer | 15+ Years in Software Engineering</p>
          </div>
          <div class="cta-buttons">
            <a mat-raised-button color="primary" (click)="scrollToElement('sectionCoreCompetencies')" (keydown.enter)="scrollToElement('sectionCoreCompetencies')" tabindex="0">
              <mat-icon>code</mat-icon>
              Core Competencies
            </a>
            <a mat-raised-button color="accent" (click)="scrollToElement('sectionSkills')" (keydown.enter)="scrollToElement('sectionSkills')" tabindex="0">
              <mat-icon>build</mat-icon>
              Technical Skills
            </a>
            <a mat-raised-button color="accent" (click)="scrollToElement('sectionProjects')" (keydown.enter)="scrollToElement('sectionProjects')" tabindex="0">
              <mat-icon>work</mat-icon>
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="sectionCoreCompetencies" class="skills-section" [@fadeIn]>
        <h2>Core Competencies</h2>
        <app-skills-bubbles></app-skills-bubbles>
      </section>

      <section id="sectionSkills" class="skills-section" [@fadeIn]>
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <!-- Front-End -->
          <mat-card class="skill-category">
            <mat-card-header>
              <mat-icon mat-card-avatar>code</mat-icon>
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

          <!-- Back-End -->
          <mat-card class="skill-category">
            <mat-card-header>
              <mat-icon mat-card-avatar>storage</mat-icon>
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

          <!-- DevOps & Tools -->
          <mat-card class="skill-category">
            <mat-card-header>
              <mat-icon mat-card-avatar>settings</mat-icon>
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

      <section id="sectionProjects" class="projects-section" [@fadeIn]>
        <h2>Projects</h2>
        <div class="projects-grid">
          <ng-container *ngIf="!isLoaded; else projectsContent">
            <app-skeleton-loader *ngFor="let i of [1,2,3]" width="300px" height="200px" [rounded]="true"></app-skeleton-loader>
          </ng-container>
          <ng-template #projectsContent>
            <!-- Your projects content here -->
          </ng-template>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    this.isLoaded = true;
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
} 