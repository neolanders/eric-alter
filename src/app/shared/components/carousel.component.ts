import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-slide">
          <div class="carousel-item" *ngFor="let item of items; let i = index" 
               [class.active]="i === currentIndex"
               [@slideAnimation]="i === currentIndex ? 'in' : 'out'">
            <div class="carousel-content" [style.background-image]="'url(' + item.image + ')'">
              <div class="carousel-text" [@fadeAnimation]="i === currentIndex ? 'in' : 'out'">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Icons -->
      <button mat-icon-button class="nav-button prev" (click)="previous()">
        <mat-icon>chevron_left</mat-icon>
      </button>
      <button mat-icon-button class="nav-button next" (click)="next()">
        <mat-icon>chevron_right</mat-icon>
      </button>

      <div class="carousel-controls">
        <div class="carousel-indicators">
          <button *ngFor="let item of items; let i = index" 
                  (click)="goToSlide(i)"
                  [class.active]="i === currentIndex"
                  class="indicator-dot">
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('in => out', [
        animate('500ms ease-in-out')
      ]),
      transition('out => in', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('fadeAnimation', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('out => in', [
        animate('500ms ease-out')
      ]),
      transition('in => out', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoPlayInterval!: ReturnType<typeof setInterval>;
  items: CarouselItem[] = [
    {
      image: '/assets/img/bg1.webp',
      title: 'Welcome to My Portfolio',
      description: 'Full Stack Developer passionate about creating amazing web experiences'
    },
    {
      image: '/assets/img/bg2.webp',
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces'
    },
    {
      image: '/assets/img/bg3.webp',
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications'
    }
  ];

  ngOnInit() {
    // Auto-advance slides every 5 seconds
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
} 