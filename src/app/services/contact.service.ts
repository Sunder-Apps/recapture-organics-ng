import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../objects/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl: string = 'https://recapture-organics-fn.azurewebsites.net/api/SendEmail?code=Fz82zR2MdfZvZlmtsh7hYVrtT7tdJ5sO61BqcGawW4YWj9Rw5Y3z/A=='
  contact: Contact
  success: boolean = false
  subSuccess: Subject<boolean> = new Subject<boolean>()
  obsSuccess: Observable<boolean> = this.subSuccess.asObservable()

  constructor(
    private httpClient:HttpClient
  ) { }

  sendEmail (contact: Contact) {
    this.contact = contact
    console.log('sendEmail', this.contact)
    this.httpClient.post<boolean>(this.contactUrl, JSON.stringify(this.contact)).subscribe(data => {
      this.subSuccess.next(data)
    })
  }
}
