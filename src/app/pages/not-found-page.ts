import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  template: `
    <mat-card>
      <mat-card-title>404: Not Found</mat-card-title>
      <mat-card-content>
        <p>Hey! It looks like this page doesn't exist yet.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="primary" routerLink="/">Take Me Home</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      text-align: center;
      margin: 100px auto;
      display: block;
      max-width: 400px;
    }
  `]
})
export class NotFoundPageComponent {}
