import { Component, OnInit } from '@angular/core'
import { Bar, BarsService } from '../bars.service'

@Component({
  selector: 'app-bars-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.less']
})
export class LeftComponent implements OnInit {
  bar:Bar = Bar.LEFT
  isOpen:boolean = false

  constructor(public barsService:BarsService) {
    barsService.isOpen.subscribe((isOpen) => {
      if (isOpen[this.bar - 1] && this.isOpen === false) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    })
  }

  ngOnInit() { }

  close () {
    this.barsService.setBar(Bar.NONE)
  }

  toggle () {
    if (this.isOpen) {
      this.barsService.setBar(Bar.NONE)
    } else {
      this.barsService.setBar(Bar.LEFT)
    }
  }

  randomAnalysis () {
    return {
      // Cannabinoids
      thc: Math.random() / 20,
      thca: Math.random() / 20,
      cbd: Math.random() / 20,
      cbda: Math.random() / 20,
      cbn: Math.random() / 20,
      cbg: Math.random() / 20,
      cbc: Math.random() / 20,
      cbl: Math.random() / 20,
      cbv: Math.random() / 20,
      thcv: Math.random() / 20,
      cbdv: Math.random() / 20,
      cbcv: Math.random() / 20,
      cbgv: Math.random() / 20,
      cbgm: Math.random() / 20,
      cbe: Math.random() / 20,
      cbt: Math.random() / 20,
      // Terpenes
      mc: Math.random() / 20,
      lm: Math.random() / 20,
      cr: Math.random() / 20,
      te: Math.random() / 20,
      pn: Math.random() / 20,
      hu: Math.random() / 20,
      on: Math.random() / 20,
      ln: Math.random() / 20
    }
  }
}
