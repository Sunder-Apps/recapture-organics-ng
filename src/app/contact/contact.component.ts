import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../objects/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact('')
  success: boolean = false
  sent: boolean = false

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactService.obsSuccess.subscribe(success => {
      this.success = success
    })
  }

  send () {
    console.log('send', this.contact)
    this.contactService.sendEmail(this.contact)
  }
}
