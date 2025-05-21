import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

interface ProjectDialogData {
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
}

@Component({
  selector: 'app-project-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="project-details" [@dialogAnimation]>
      <div class="dialog-header">
        <h2>{{data.title}}</h2>
        <button mat-icon-button (click)="close()" aria-label="Close dialog">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      
      <div class="dialog-content" [@contentAnimation]>
        <div class="project-image">
          <img [src]="data.image" [alt]="data.title">
        </div>
        
        <div class="project-info">
          <p class="description">{{data.description}}</p>
          
          <div class="tech-stack">
            <h3>Technologies Used</h3>
            <div class="tech-icons">
              <div class="tech-item" *ngFor="let tech of data.technologies">
                <img [src]="tech.icon" [alt]="tech.name">
                <span>{{tech.name}}</span>
              </div>
            </div>
          </div>
          
          <div class="project-details-grid">
            <div class="detail-item">
              <h3>Role</h3>
              <p>{{data.role}}</p>
            </div>
            <div class="detail-item">
              <h3>Duration</h3>
              <p>{{data.duration}}</p>
            </div>
          </div>
          
          <div class="features">
            <h3>Key Features</h3>
            <ul>
              <li *ngFor="let feature of data.features">{{feature}}</li>
            </ul>
          </div>
          
          <div class="challenges">
            <h3>Challenges & Solutions</h3>
            <ul>
              <li *ngFor="let challenge of data.challenges">{{challenge}}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="dialog-actions">
        <a mat-raised-button color="primary" [href]="data.link" target="_blank" rel="noopener">
          View Project
        </a>
        <button mat-button (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .project-details {
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      background: white;
      border-radius: 8px;
      padding: 24px;
    }

    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h2 {
        margin: 0;
        font-size: 24px;
        color: #333;
      }
    }

    .dialog-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .project-image {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .project-info {
      .description {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
        margin-bottom: 24px;
      }
    }

    .tech-stack {
      margin-bottom: 24px;

      h3 {
        margin-bottom: 16px;
        color: #333;
      }

      .tech-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }

      .tech-item {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #f5f5f5;
        padding: 8px 16px;
        border-radius: 20px;

        img {
          width: 24px;
          height: 24px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }

    .project-details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      margin-bottom: 24px;

      .detail-item {
        h3 {
          margin-bottom: 8px;
          color: #333;
        }

        p {
          color: #666;
        }
      }
    }

    .features, .challenges {
      margin-bottom: 24px;

      h3 {
        margin-bottom: 16px;
        color: #333;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 8px;
          color: #666;

          &:before {
            content: '•';
            position: absolute;
            left: 8px;
            color: #2196f3;
          }
        }
      }
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #eee;
    }

    @media (min-width: 768px) {
      .dialog-content {
        grid-template-columns: 1fr 1fr;
      }
    }
  `],
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9) translateY(-20px)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }))
      ])
    ]),
    trigger('contentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms 200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
} 