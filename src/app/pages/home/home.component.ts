import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader.component';
import { CarouselComponent } from '../../shared/components/carousel.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    SkeletonLoaderComponent,
    CarouselComponent
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
            <a mat-raised-button color="primary" routerLink="/skills">View Skills</a>
            <a mat-raised-button color="accent" routerLink="/projects">View Projects</a>
          </div>
        </div>
      </section>

      <section id="sectionSkills" class="skills-section" [@fadeIn]>
        <h2>Skills</h2>
        <div class="skills-grid">
          <ng-container *ngIf="!isLoaded; else skillsContent">
            <app-skeleton-loader *ngFor="let i of [1,2,3,4]" width="250px" height="150px" [rounded]="true"></app-skeleton-loader>
          </ng-container>
          <ng-template #skillsContent>
            <!-- Your skills content here -->
          </ng-template>
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
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX({{direction}})' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { params: { direction: '0' } })
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    // Set loaded state immediately since we're already past the initial loading
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