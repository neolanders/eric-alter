import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  boolMessageSent: boolean;

  private name: string;
  private email: string;
  private message: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendMessage () {
    console.log('#--Send Message--#');

    this.contactService.create(this.name, this.email, this.message)
        .then(res => {
          this.boolMessageSent = true;
        });
  }
}
