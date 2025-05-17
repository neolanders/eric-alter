import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, TranslateModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <mat-icon svgIcon="github"></mat-icon>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <mat-icon svgIcon="linkedin"></mat-icon>
          </a>
        </div>
        <div class="made-with">
          {{ 'footer.madeWith' | translate }}
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #2a2a2a;
      padding: 20px;
      border-top: 1px solid #333;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .social-links {
      display: flex;
      gap: 16px;

      a {
        color: #fff;
        transition: color 0.3s ease;

        &:hover {
          color: #666;
        }

        mat-icon {
          width: 24px;
          height: 24px;
        }
      }
    }

    .made-with {
      color: #fff;
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {} 