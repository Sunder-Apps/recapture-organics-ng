import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products:any[] = [
    {
      name: 'Organic Flower',
      description: 'Organically grown, locally sourced, carefully packaged.  Our non-GMO, USDA Organic flower provides the most authentic combination of cannabinoids and terpenes.',
      icon: 'fas fa-cannabis',
      image: 'https://i.imgur.com/0yLPKhJ.jpg'
    },
    {
      name: 'Live Oil',
      description: 'Live Oil is extracted from flash-frozen flower for the highest-quality and most potent cannabinoid concentrate on the market.',
      icon: 'fas fa-oil-can',
      image: 'https://i.imgur.com/u5ZXs4E.jpg'
    },
    {
      name: 'Full-Spectrum Hemp Oil',
      description: 'Hemp-derived CBD with high cannabinoid & terpene retention.',
      icon: 'fas fa-tint',
      image: 'https://i.imgur.com/u5ZXs4E.jpg',
    },
    {
      name: 'CBD Distillate',
      description: 'Purified broad-spectrum oil, distilled to remove terpenes, fats & lipids.',
      icon: 'fas fa-flask',
      image: 'https://i.imgur.com/zV97G87.jpg'
    },
    {
      name: 'Water-Soluable CBD',
      description: 'Using nanoemulsion, CBD oil is rendered soluble for beverages.',
      icon: 'fas fa-water',
      image: 'https://i.imgur.com/u5ZXs4E.jpg'
    },
    {
      name: 'CBD Isolate',
      description: 'CBD molecule isolated from other compounds, delivered in a fine crystalline powder form.',
      icon: 'fas fa-cannabis',
      image: 'https://i.imgur.com/MQyS5vH.jpg'
    }
  ]
  constructor() { }

  ngOnInit() { }
}
