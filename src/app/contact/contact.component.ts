import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactInfo:any[] = [
    {
      name: 'Phone',
      value: '(530)-320-5555',
      icon: 'fas fa-phone'
    },
    {
      name: 'Email',
      value: 'recaptureorganics@gmail.com',
      icon: 'fas fa-envelope-open-text'
    }
  ]
  
  constructor() { }
  ngOnInit() { }
}
