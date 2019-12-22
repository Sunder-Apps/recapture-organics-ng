import { Component, HostListener } from '@angular/core';
import { Theme } from './settings/settings';
import { Router, NavigationEnd } from '@angular/router';
import { BarsService, Bar } from './bars/bars.service';
import { BackgroundService } from './background/background.service';
import { SettingsService } from './settings/settings.service';
import { CryptoService } from './crypto/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  opened:boolean = false
  theme:Theme = Theme.DARK
  snap:boolean = false
  konami:boolean = false
  konamiCode:number[] = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ]
  konamiIndex:number = 0

  constructor (private router:Router, 
    private barsService:BarsService,
    private backgroundService:BackgroundService,
    private settingsService:SettingsService,
    private cryptoService:CryptoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.barsService.setBar(Bar.NONE)
        this.backgroundService.trigger()
      }
    })
    this.settingsService.settings.subscribe(settings => {
      if (settings) {
          this.theme = settings.theme
          this.snap = !settings.animations
      } 
    })
  }

  ngOnInit () {
    this.cryptoService.init()
  }

  @HostListener('document:keydown', ['$event'])
  keyDown (event: KeyboardEvent) {
    if (event.keyCode === this.konamiCode[this.konamiIndex]) {
      this.konamiIndex++
    } else {
      this.konamiIndex = 0
    }
    if (this.konamiIndex === this.konamiCode.length) {
      this.konami = true
      this.konamiIndex = 0
    }
  }
}
