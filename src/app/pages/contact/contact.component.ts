// import { Component, OnInit } from '@angular/core';
// import { ContactService } from '../../services/contact.service';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
//
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit {
//
//   boolMessageSent: boolean;
//   messages: FirebaseListObservable<any[]>;
//
//   private name: string;
//   private email: string;
//   private message: string;
//
//   constructor(public af: AngularFire) {
//     this.messages = af.database.list('messages');
//   }
//
//   ngOnInit() { }
//
//   sendMessage () {
//     console.log('#--Send Message--#');
//
//     this.messages.push({
//         name: this.name,
//         email: this.email,
//         message: this.message,
//         date: new Date().toDateString()
//       }).then(function(res) {
//           console.log('res', res);
//       });
//
//     // this.contactService.create(this.name, this.email, this.message)
//     //     .then(res => {
//     //       this.boolMessageSent = true;
//     //       // this.items = af.database.list('/items');
//     //     });
//   }
// }

import { Component,
         OnInit,
         ViewChild,
         Inject } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email.validator';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  public errors = [
    { name: 'required', text: 'This field is required', rules: ['touched', 'dirty'] },
    { name: 'minlength', text: 'Min length is 5', rules: ['dirty'] }
  ];
  public form: FormGroup;
  public captchaValid: boolean = false;
  public boolMessageSent: boolean = false;
  public messages: FirebaseListObservable<any[]>;

  // https://console.firebase.google.com/project/eric-alter/database/data/messages/-KiDXnDaHNOv9rQ_SP77

  constructor(@Inject(FormBuilder) public fb: FormBuilder,
              private router: Router,
              public af: AngularFire) {
     this.messages = af.database.list('messages');
  }

  ngOnInit() {
    this.initForm();
  }

  handleCorrectCaptcha(event) {
    // console.log('event', event);
    if(event) {
      this.captchaValid = true;
    }
  }

  initForm() {
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, EmailValidator.validate]],
      'message': ['',[Validators.required]]
    });
  }

  onSubmit() {
    this.boolMessageSent = true;
    this.messages.push({
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
      date: new Date().toDateString()
    }).then(function(res) {
      // console.log('res', res);
    });
  }
}
