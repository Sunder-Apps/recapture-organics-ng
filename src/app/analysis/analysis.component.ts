import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

declare let google:any;

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent implements OnInit {
  params:any
  noidData:any[][]
  terpData:any[][]
  noidNames:any = []
  terpNames:any = []
  cannabinoids:any[] = [
    {
      name: 'tetrahydrocannabinol',
      abbreviation: 'thc',
      color: '#06ac3e',
      info: '',
      link: ''
    },
    {
      name: 'tetrahydrocannabinolic acid',
      abbreviation: 'thca',
      color: '#059033'
    },
    {
      name: 'tetrahydrocannabivarin',
      abbreviation: 'thcv',
      color: '#046223'
    },
    {
      name: 'cannabidiol',
      abbreviation: 'cbd',
      color: '#3385ff'
    },
    {
      name: 'cannabidiolic acid',
      abbreviation: 'cbda',
      color: '#0066ff'
    },
    {
      name: 'cannabidivarin',
      abbreviation: 'cbdv',
      color: '#0052cc'
    },
    {
      name: 'cannabigerol',
      abbreviation: 'cbg',
      color: ''
    },
    {
      name: 'cannabigerovarin',
      abbreviation: 'cbgv',
      color: ''
    },
    {
      name: 'cannabigerol monomethyl ether',
      abbreviation: 'cbgm',
      color: ''
    },
    {
      name: 'cannabichromene',
      abbreviation: 'cbc',
      color: ''
    },
    {
      name: 'cannabichromevarin',
      abbreviation: 'cbcv',
      color: ''
    },
    {
      name: 'cannabielsoin',
      abbreviation: 'cbe',
      color: ''
    },
    {
      name: 'cannabicyclol',
      abbreviation: 'cbl',
      color: ''
    },
    {
      name: 'cannabinol',
      abbreviation: 'cbn',
      color: ''
    },
    {
      name: 'cannabivarin',
      abbreviation: 'cbv',
      color: ''
    },
    
    {
      name: 'cannabicitran',
      abbreviation: 'cbt',
      color: ''
    }
  ]
  terpenes:any[] = [
    {
      name: 'myrcene',
      abbreviation: 'mc',
      color: ''
    },
    {
      name: 'limonene',
      abbreviation: 'lm',
      color: ''
    },
    {
      name: 'caryophyllene',
      abbreviation: 'cr',
      color: ''
    },
    {
      name: 'terpinolene',
      abbreviation: 'te',
      color: ''
    },
    {
      name: 'pinene',
      abbreviation: 'pn',
      color: ''
    },
    {
      name: 'humulene',
      abbreviation: 'hu',
      color: ''
    },
    {
      name: 'ocimene',
      abbreviation: 'on',
      color: ''
    },
    {
      name: 'linalool',
      abbreviation: 'ln',
      color: ''
    }
  ]
  roles:any[] = [
    {
      type: 'string',
      role: 'domain'
    },
    {
      type: 'number',
      role: 'data'
    }
  ]

  noidOptions:any = {
    colors: [
      '#059033',
      '#93CB56',
      '#7BAA47',
      '#355A20'
    ],
    backgroundColor: {
      stroke: '#000000',
      fill:'#000000', 
      fillOpacity: '0' 
    },
    legend: {
      position: 'none'
    },
    animation: {
      duration: 1000,
      easing: 'out'
    },
    is3D: false
  }

  terpOptions:any = {
    colors: [
      '#059033',
      '#93CB56',
      '#7BAA47',
      '#355A20'
    ],
    backgroundColor: {
      stroke: '#000000',
      fill:'#000000', 
      fillOpacity: '0' 
    },
    legend: {
      position: 'none'
    },
    animation: {
      duration: 1000,
      easing: 'out'
    },
    is3D: false
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit () {
    this.activatedRoute.queryParams.subscribe(params => {
      this.params = params
      let cannabinoids = this.cannabinoids.map(noid => noid.name),
          terpenes = this.terpenes.map(terp => terp.name)
      /*this.data = Object.entries(this.params)
      this.data.forEach(data => data[1] = parseFloat(data[1]))
      this.data.push(["other", this.data.reduce((previousValue, currentValue) => previousValue - currentValue[1] , 1)])*/
    })
  }
}
