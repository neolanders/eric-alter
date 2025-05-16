import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton-wrapper" [style.width]="width" [style.height]="height">
      <div class="skeleton-loader" [class.rounded]="rounded"></div>
    </div>
  `,
  styles: [`
    .skeleton-wrapper {
      background: #f0f0f0;
      overflow: hidden;
      position: relative;
    }
    .skeleton-loader {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    .rounded {
      border-radius: 4px;
    }
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonLoaderComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() rounded: boolean = false;
} 