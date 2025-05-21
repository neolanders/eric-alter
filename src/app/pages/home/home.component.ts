import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader.component';
import { CarouselComponent } from '../../shared/components/carousel.component';
import { SkillsBubblesComponent } from '../../core/components/skills-bubbles/skills-bubbles.component';
import { ProjectDetailsDialogComponent } from '../../shared/components/project-details-dialog/project-details-dialog.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import workData from '../../../assets/data/work.json';

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  link: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  features: string[];
  challenges: string[];
  role: string;
  duration: string;
  isCareer: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    SkeletonLoaderComponent,
    CarouselComponent,
    SkillsBubblesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
          <div class="skill-card" *ngFor="let skill of skills">
            <img [src]="skill.icon" [alt]="skill.name" class="skill-icon">
            <h3>{{skill.name}}</h3>
            <p>{{skill.description}}</p>
          </div>
        </div>
      </section>

      <section id="sectionProjects" class="projects-section" [@fadeIn]>
        <h2>Projects & Career</h2>
        <mat-tab-group animationDuration="300ms" class="projects-tabs">
          <mat-tab label="Personal Projects">
            <div class="projects-grid" [@staggerAnimation]>
              <ng-container *ngIf="!isLoaded; else projectsContent">
                <app-skeleton-loader *ngFor="let i of [1,2,3]" width="300px" height="200px" [rounded]="true"></app-skeleton-loader>
              </ng-container>
              <ng-template #projectsContent>
                <div class="project-card" 
                     *ngFor="let project of personalProjects; let i = index" 
                     (click)="openProjectDetails(project)"
                     (keydown.enter)="openProjectDetails(project)"
                     tabindex="0"
                     role="button"
                     [attr.aria-label]="'View details for ' + project.title"
                     [@cardAnimation]
                     [style.animation-delay]="i * 100 + 'ms'">
                  <div class="project-image">
                    <img [src]="project.image" [alt]="project.title">
                    <div class="project-overlay">
                      <div class="tech-stack">
                        <img *ngFor="let tech of project.technologies" 
                             [src]="tech.icon" 
                             [alt]="tech.name" 
                             class="tech-icon">
                      </div>
                    </div>
                  </div>
                  <div class="project-info">
                    <h3>{{project.title}}</h3>
                    <p>{{project.shortDescription}}</p>
                    <button mat-raised-button color="primary" class="view-project-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </ng-template>
            </div>
          </mat-tab>
          <mat-tab label="Career Work">
            <div class="projects-grid" [@staggerAnimation]>
              <ng-container *ngIf="!isLoaded; else careerContent">
                <app-skeleton-loader *ngFor="let i of [1,2,3]" width="300px" height="200px" [rounded]="true"></app-skeleton-loader>
              </ng-container>
              <ng-template #careerContent>
                <div class="project-card" 
                     *ngFor="let project of careerProjects; let i = index" 
                     (click)="openProjectDetails(project)"
                     (keydown.enter)="openProjectDetails(project)"
                     tabindex="0"
                     role="button"
                     [attr.aria-label]="'View details for ' + project.title"
                     [@cardAnimation]
                     [style.animation-delay]="i * 100 + 'ms'">
                  <div class="project-image">
                    <img [src]="project.image" [alt]="project.title">
                    <div class="project-overlay">
                      <div class="tech-stack">
                        <img *ngFor="let tech of project.technologies" 
                             [src]="tech.icon" 
                             [alt]="tech.name" 
                             class="tech-icon">
                      </div>
                    </div>
                  </div>
                  <div class="project-info">
                    <h3>{{project.title}}</h3>
                    <p>{{project.shortDescription}}</p>
                    <button mat-raised-button color="primary" class="view-project-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </ng-template>
            </div>
          </mat-tab>
        </mat-tab-group>
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
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoaded = false;
  projects: Project[] = workData.projects;
  personalProjects: Project[] = [];
  careerProjects: Project[] = [];

  slides = [
    {
      image: 'assets/images/slide1.jpg',
      title: 'Welcome to My Portfolio',
      description: 'Full-stack developer passionate about creating elegant solutions'
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'Expert in Modern Technologies',
      description: 'Specializing in Angular, React, and Node.js development'
    },
    {
      image: 'assets/images/slide3.jpg',
      title: 'Let\'s Build Something Amazing',
      description: 'Ready to take on new challenges and create innovative solutions'
    }
  ];

  skills = [
    {
      name: 'TypeScript',
      icon: 'assets/icons/typescript.svg',
      description: 'Strong typing and modern JavaScript features'
    },
    {
      name: 'React',
      icon: 'assets/icons/react.svg',
      description: 'Building dynamic and responsive user interfaces'
    },
    {
      name: 'Angular',
      icon: 'assets/icons/angular.svg',
      description: 'Enterprise-grade web applications'
    },
    {
      name: 'Node.js',
      icon: 'assets/icons/nodejs.svg',
      description: 'Scalable backend development'
    },
    {
      name: 'Python',
      icon: 'assets/icons/python.svg',
      description: 'Data analysis and automation'
    },
    {
      name: 'Databases',
      icon: 'assets/icons/database.svg',
      description: 'SQL and NoSQL database management'
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.isLoaded = true;
    // Split projects into personal and career
    this.personalProjects = this.projects.filter(project => !project.isCareer);
    this.careerProjects = this.projects.filter(project => project.isCareer);
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

  openProjectDetails(project: Project): void {
    const dialogRef = this.dialog.open(ProjectDetailsDialogComponent, {
      data: project,
      width: '90%',
      maxWidth: '800px',
      panelClass: 'project-details-dialog',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    });

    dialogRef.afterClosed().subscribe(() => {
      // Optional: Add any cleanup or state reset logic here
    });
  }
} 