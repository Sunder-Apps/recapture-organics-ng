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
      value: '555-555-5555',
      icon: 'fas fa-phone'
    },
    {
      name: 'Email',
      value: 'nathan@recaptureorganics.com',
      icon: 'fas fa-envelope-open-text'
    },
    {
      name: 'Address',
      value: '420 High Way, CA 19023',
      icon: 'fas fa-map-marker-alt'
    },
    {
      name: 'Hours',
      value: 'Never',
      icon: 'fas fa-clock'
    }
  ]
  
  constructor() { }
  ngOnInit() { }
}
