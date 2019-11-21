import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent implements OnInit {
  params:any
  data:any[] = [
    {
      name: 'sam',
      value: 12
    },
    {
      name: 'sunder',
      value: 86
    }
  ]
  cannabinoids:any[] = [
    {
      name: 'tetrahydrocannabinol',
      abbreviation: 'thc'
    },
    {
      name: 'tetrahydrocannabinolic acid',
      abbreviation: 'thca'
    },
    {
      name: 'cannabidiol',
      abbreviation: 'cbd'
    },
    {
      name: 'cannabidiolic acid',
      abbreviation: 'cbda'
    },
    {
      name: 'cannabinol',
      abbreviation: 'cbn'
    },
    {
      name: 'cannabigerol',
      abbreviation: 'cbg'
    },
    {
      name: 'cannabichromene',
      abbreviation: 'cbc'
    },
    {
      name: 'cannabicyclol',
      abbreviation: 'cbl'
    },
    {
      name: 'cannabivarin',
      abbreviation: 'cbv'
    },
    {
      name: 'tetrahydrocannabivarin',
      abbreviation: 'thcv'
    },
    {
      name: 'cannabidivarin',
      abbreviation: 'cbdv'
    },
    {
      name: 'cannabichromevarin',
      abbreviation: 'cbcv'
    },
    {
      name: 'cannabigerovarin',
      abbreviation: 'cbgv'
    },
    {
      name: 'cannabigerol monomethyl ether',
      abbreviation: 'cbgm'
    },
    {
      name: 'cannabielsoin',
      abbreviation: 'cbe'
    },
    {
      name: 'cannabicitran',
      abbreviation: 'cbt'
    }
  ]
  terpenes:any[] = [
    {
      name: 'myrcene',
      abbreviation: 'mc'
    },
    {
      name: 'limonene',
      abbreviation: 'lm'
    },
    {
      name: 'caryophyllene',
      abbreviation: 'cr',
    },
    {
      name: 'terpinolene',
      abbreviation: 'te'
    },
    {
      name: 'pinene',
      abbreviation: 'pn'
    },
    {
      name: 'humulene',
      abbreviation: 'hu'
    },
    {
      name: 'ocimene',
      abbreviation: 'on'
    },
    {
      name: 'linalool',
      abbreviation: 'ln'
    }
  ]
  view: any[] = [700, 400]
  colors: { 
    domain: [
      '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'
    ]
  }
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.params = params
    })
  }

  onSelect ($event) {
    console.log($event)
  }
}
