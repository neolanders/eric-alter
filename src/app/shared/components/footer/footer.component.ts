import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a mat-icon-button href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <mat-icon svgIcon="github"></mat-icon>
          </a>
          <a mat-icon-button href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <mat-icon svgIcon="linkedin"></mat-icon>
          </a>
          <a mat-icon-button href="assets/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <mat-icon>description</mat-icon>
          </a>
        </div>
        <div class="attribution">
          Made with ❤️ by Eric Alter
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1a1a1a;
      color: white;
      padding: 2rem 0;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .social-links a {
      color: white;
    }

    .social-links a:hover {
      color: #64ffda;
    }

    .attribution {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  `]
})
export class FooterComponent {} 