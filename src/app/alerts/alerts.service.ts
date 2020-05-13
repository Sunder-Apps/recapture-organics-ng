import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Alert, Answer } from './alert'

import { StorageService } from '../storage/storage.service'
import { SettingsService } from '../services/settings.service'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  subject:Subject<Alert[]> = new Subject<Alert[]>()
  alerts:Observable<Alert[]> = this.subject.asObservable()
  listId:string = 'brah-alerts-0'
  list:Alert[] = [
    /*{
      alertId: 'alerts-dev-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      title: 'This app is in development.',
      message: 'Send bug reports to sam@sunderapps.com',
      acceptText: 'Okay'
    },
    {
      alertId: 'alerts-cookies-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      title: 'We use 🍪',
      message: 'This app uses cookies for a better web experience.',
      acceptText: 'Okay',
      infoText: 'Learn More',
      info: () => { alert('C is for 🍪; That\'s good enough for me.'); }
    }/*,
    {
      alertId: 'brah-alerts-ads-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      title: 'Support Us',
      message: 'This app displays ads to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Ads',
      reject: () => { this.settingsService.set('ads', false) }
    },
    {
      alertId: 'brah-alerts-crypto-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      title: 'Support Us',
      message: 'This app mines cryptocurrency to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Mining',
      reject: () => { this.settingsService.set('crypto', false) }
    }*/
  ];

  constructor(private storageService:StorageService,
              private settingsService:SettingsService) {
    this.load();
  }

  load () {
    let str = this.storageService.get(this.listId),
        json;
    if (str !== null && str !== undefined && str !== '') {
      json = JSON.parse(str);
      if (json !== null && json !== undefined) {
        this.list = json;
      }
    }
    this.update();
  }

  update () {
    this.subject.next(this.list);
    this.storageService.set(this.listId, JSON.stringify(this.list))
  }

  push (alert:Alert) {
    if (this.list.length) {
      var index = this.list.findIndex(a => a.alertId === alert.alertId)
      if (index > -1 && index < this.list.length) {
        this.list.splice(index, 1)
      }
      this.list.push(alert)
    } else {
      this.list = [alert]
    }
    this.update()
  }

  dismiss (index:number, answer:Answer) {
    if (this.list.length > index && index > -1) {
      let alert = this.list[index]
      alert.disabled = true
      alert.answer = answer
      this.list.shift()
      this.list.push(alert)
      switch (answer) {
        case Answer.ACCEPT:
          if (alert.accept) {
            alert.accept()
          }
          break;
        case Answer.INFO:
          if (alert.info) {
            alert.info()
          }
          break;
        case Answer.LINK:
          if (alert.link) {
            alert.link()
          }
          break;
        case Answer.REJECT:
          if (alert.reject) {
            alert.reject()
          }
          break;
        default:
          console.log('no answer')
      }
    }
    this.update();
  }
}
