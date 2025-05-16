import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmailValidator } from '../../validators/email.validator';
import { Database, ref, push, list, get } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface Message {
  name: string;
  email: string;
  message: string;
  date: string;
}

// declare global {
//   interface Window {
//     grecaptcha: {
//       ready: (callback: () => void) => void;
//       execute: (siteKey: string, options: { action: string }) => Promise<string>;
//     };
//   }
// }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public errors = [
    { name: 'required', text: 'This field is required', rules: ['touched', 'dirty'] },
    { name: 'minlength', text: 'Min length is 5', rules: ['dirty'] }
  ];
  public form!: FormGroup;
  public captchaValid = false;
  public boolMessageSent = false;
  public messages: Observable<Message[]>;
  private readonly SITE_KEY = '6LeC9RwUAAAAALj2PBMxg4cK_uoHg5wncPz4ynTa';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private database: Database
  ) {
    const messagesRef = ref(this.database, 'messages');
    this.messages = from(get(messagesRef)).pipe(
      map(snapshot => {
        const messages: Message[] = [];
        snapshot.forEach(child => {
          messages.push(child.val() as Message);
        });
        return messages;
      })
    );
  }

  ngOnInit() {
    this.initForm();
    // this.loadRecaptcha();
  }

  // private loadRecaptcha() {
  //   const script = document.createElement('script');
  //   script.src = `https://www.google.com/recaptcha/api.js?render=${this.SITE_KEY}`;
  //   script.async = true;
  //   script.defer = true;
  //   document.head.appendChild(script);
  // }

  // private async verifyCaptcha(): Promise<boolean> {
  //   try {
  //     const token = await window.grecaptcha.execute(this.SITE_KEY, { action: 'submit' });
  //     // Here you would typically verify the token with your backend
  //     // For now, we'll just consider it valid if we get a token
  //     return !!token;
  //   } catch (error) {
  //     console.error('reCAPTCHA error:', error);
  //     return false;
  //   }
  // }

  initForm(): void {
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, EmailValidator.validate]],
      'message': ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    // if (this.form.valid) {
    //   const isCaptchaValid = await this.verifyCaptcha();
    //   if (isCaptchaValid) {
    //     this.boolMessageSent = true;
    //     const messagesRef = ref(this.database, 'messages');
    //     try {
    //       await push(messagesRef, {
    //         name: this.form.value.name,
    //         email: this.form.value.email,
    //         message: this.form.value.message,
    //         date: new Date().toDateString()
    //       });
    //       console.log('Message saved successfully');
    //     } catch (error) {
    //       console.error('Error saving message:', error);
    //     }
    //   }
    // }
  }
} 