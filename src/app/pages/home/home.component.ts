import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarouselComponent } from '../../shared/components/carousel.component';
import { SkillsBubblesComponent } from '../../core/components/skills-bubbles/skills-bubbles.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    CarouselComponent,
    SkillsBubblesComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
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

  ngOnInit(): void {
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