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
  noidData:any[][] = []
  terpData:any[][] = []
  noidNames:any = []
  terpNames:any = []
  cannabinoids:any[] = [
    {
      name: 'tetrahydrocannabinol',
      abbreviation: 'thc',
      color: '#8fbb5d',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/THC.svg/220px-THC.svg.png',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/THC.svg/220px-THC.svg.png'
    },
    {
      name: 'tetrahydrocannabinolic acid',
      abbreviation: 'thca',
      color: '#7BAA47',
      link: 'https://en.wikipedia.org/wiki/Tetrahydrocannabinolic_acid',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tetrahydrocannabinolicacid.svg/220px-Tetrahydrocannabinolicacid.svg.png'
    },
    {
      name: 'tetrahydrocannabivarin',
      abbreviation: 'thcv',
      color: '#69903c',
      link: 'https://en.wikipedia.org/wiki/Tetrahydrocannabivarin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thcv.svg/220px-Thcv.svg.png'
    },
    {
      name: 'cannabidiol',
      abbreviation: 'cbd',
      color: '#3385ff',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cannabidiol.svg/225px-Cannabidiol.svg.png',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cannabidiol.svg/225px-Cannabidiol.svg.png'
    },
    {
      name: 'cannabidiolic acid',
      abbreviation: 'cbda',
      color: '#0066ff'
    },
    {
      name: 'cannabidivarin',
      abbreviation: 'cbdv',
      color: '#0052cc',
      link: 'https://en.wikipedia.org/wiki/Cannabidivarin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cannabidivarin.svg/220px-Cannabidivarin.svg.png'
    },
    {
      name: 'cannabigerol',
      abbreviation: 'cbg',
      color: '#b366ff',
      link: 'https://en.wikipedia.org/wiki/Cannabigerol',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cannabigerol-skeletal.svg/220px-Cannabigerol-skeletal.svg.png'
    },
    {
      name: 'cannabigerovarin',
      abbreviation: 'cbgv',
      color: '#9933ff'
    },
    {
      name: 'cannabigerol monomethyl ether',
      abbreviation: 'cbgm',
      color: '#8000ff'
    },
    {
      name: 'cannabichromene',
      abbreviation: 'cbc',
      color: '#ff6600',
      link: 'https://en.wikipedia.org/wiki/Cannabichromene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%28RS%29-Cannabichromene.svg/220px-%28RS%29-Cannabichromene.svg.png'
    },
    {
      name: 'cannabichromevarin',
      abbreviation: 'cbcv',
      color: '#cc5200',
      link: 'https://en.wikipedia.org/wiki/Cannabichromevarin'
    },
    {
      name: 'cannabielsoin',
      abbreviation: 'cbe',
      color: '#ffe066'
    },
    {
      name: 'cannabicyclol',
      abbreviation: 'cbl',
      color: '#ffd633',
      link: 'https://en.wikipedia.org/wiki/Cannabicyclol',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cannabicyclol.svg/220px-Cannabicyclol.svg.png'
    },
    {
      name: 'cannabinol',
      abbreviation: 'cbn',
      color: '#ffcc00',
      link: 'https://en.wikipedia.org/wiki/Cannabinol',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cannabinol.svg/220px-Cannabinol.svg.png'
    },
    {
      name: 'cannabivarin',
      abbreviation: 'cbv',
      color: '#cca300',
      link: 'https://en.wikipedia.org/wiki/Cannabivarin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cannabivarin.svg/250px-Cannabivarin.svg.png'
    }, 
    {
      name: 'cannabicitran',
      abbreviation: 'cbt',
      color: '#997a00'
    }
  ]
  terpenes:any[] = [
    {
      name: 'myrcene',
      abbreviation: 'mc',
      color: '#b8b88c',
      comparison: 'bay',
      link: 'https://en.wikipedia.org/wiki/Myrcene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Myrcene_beta_straight_acsv.svg/220px-Myrcene_beta_straight_acsv.svg.png'
    },
    {
      name: 'limonene',
      abbreviation: 'lm',
      color: '#fda909',
      comparison: 'oranges',
      link: 'https://en.wikipedia.org/wiki/Limonene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Limonene-2D-skeletal.svg/70px-Limonene-2D-skeletal.svg.png'
    },
    {
      name: 'caryophyllene',
      abbreviation: 'cr',
      color: '#cd9368',
      comparison: 'cloves',
      link: 'https://en.wikipedia.org/wiki/Caryophyllene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Beta-Caryophyllen.svg/220px-Beta-Caryophyllen.svg.png'
    },
    {
      name: 'terpinolene',
      abbreviation: 'te',
      color: '#819e84',
      comparison: 'majoram',
      link: 'https://en.wikipedia.org/wiki/Terpinene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Terpinolene.svg/50px-Terpinolene.svg.png'
    },
    {
      name: 'pinene',
      abbreviation: 'pn',
      color: '#a5a862',
      comparison: 'pine',
      link: 'https://en.wikipedia.org/wiki/Pinene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Alpha-pinen.svg/150px-Alpha-pinen.svg.png'
    },
    {
      name: 'humulene',
      abbreviation: 'hu',
      color: '#9cb444',
      comparison: 'hops',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Alpha-pinen.svg/150px-Alpha-pinen.svg.png',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Humulene.png/150px-Humulene.png'
    },
    {
      name: 'ocimene',
      abbreviation: 'on',
      color: '',
      comparison: '',
      link: 'https://en.wikipedia.org/wiki/Ocimene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Alpha-ocimene.svg/220px-Alpha-ocimene.svg.png'
    },
    {
      name: 'linalool',
      abbreviation: 'ln',
      color: '',
      link: 'https://en.wikipedia.org/wiki/Linalool',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Linalool_skeletal.svg/240px-Linalool_skeletal.svg.png'
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
    },
    {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }
  ]

  noidOptions:any = {
    colors: this.cannabinoids.map(noid => noid.color),
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
    is3D: false,
    tooltip: {
      isHtml: true
    }
  }

  terpOptions:any = {
    colors: this.terpenes.map(terp => terp.color),
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
    is3D: false,
    tooltip: {
      isHtml: true
    }
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit () {
    this.activatedRoute.queryParams.subscribe(params => {
      this.params = params
      let cannabinoids = this.cannabinoids.map(noid => noid.name),
          terpenes = this.terpenes.map(terp => terp.name),
          data = Object.entries(this.params)
      this.cannabinoids.forEach(noid => {
        let tooltip = `
        <div class="tooltip">
          <img src="${noid.image}" />
          <div style="border-bottom: 2px solid ${noid.color}">
            <h4>${noid.abbreviation}</h4>
            <a href="${noid.link}">
              <i class="fab fa-wikipedia-w"></i>
            </a>
          </div>
          <h5>${noid.name}</h5>
        </div>`
        this.noidData.push([noid.abbreviation, parseFloat(params[noid.abbreviation]), tooltip])
      })
      this.terpenes.forEach(terp => {
        let tooltip = '<img src="' + terp.image + '" />'
        this.terpData.push([terp.abbreviation, parseFloat(params[terp.abbreviation]), tooltip])
      })
      //this.noidData.push(["other", this.noidData.reduce((previousValue, currentValue) => previousValue - <number>currentValue[1] , 1)])
      //this.terpData.push(["other", this.terpData.reduce((previousValue, currentValue) => previousValue - <number>currentValue[1] , 1)])
    })
  }
}
