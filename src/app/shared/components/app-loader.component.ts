import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  template: `
    <div class="loader-container">
      <div class="loader-content">
        <div class="skeleton-header"></div>
        <div class="skeleton-body">
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
        </div>
        <mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>
      </div>
    </div>
  `,
  styles: [`
    .loader-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ffffff;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loader-content {
      width: 100%;
      max-width: 600px;
      padding: 2rem;
    }

    .skeleton-header {
      height: 64px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 2rem;
    }

    .skeleton-body {
      margin-bottom: 2rem;
    }

    .skeleton-line {
      height: 20px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 1rem;

      &:nth-child(2) {
        width: 80%;
      }

      &:nth-child(3) {
        width: 60%;
      }
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class AppLoaderComponent {} 