import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="contact-container">
      <h1>Contact Me</h1>
      <mat-card>
        <mat-card-content>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" placeholder="Your name">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="Your email" type="email">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Message</mat-label>
              <textarea matInput formControlName="message" placeholder="Your message" rows="5"></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="!contactForm.valid">
              Send Message
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: white;
      margin-bottom: 2rem;
    }

    mat-card {
      background-color: #1a1a1a;
      color: white;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    mat-form-field {
      width: 100%;
    }

    ::ng-deep {
      .mat-mdc-form-field {
        .mat-mdc-text-field-wrapper {
          background-color: #2a2a2a;
        }
      }

      .mat-mdc-form-field-label {
        color: #e0e0e0;
      }

      .mat-mdc-input-element {
        color: white;
      }
    }

    button {
      align-self: flex-end;
      min-width: 150px;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically send the form data to your backend
      this.contactForm.reset();
    }
  }
} 