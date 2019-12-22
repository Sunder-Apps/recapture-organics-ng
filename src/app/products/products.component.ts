import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products:any[] = [
    {
      name: 'Live Oil',
      description: 'Live Oil is extracted from flash-frozen flower for the highest-quality and most potent cannabinoid concentrate on the market.',
      icon: 'fas fa-oil-can',
      image: 'https://hempsi.com/wp-content/uploads/2019/08/IMG_5678t.jpg'
    },
    {
      name: 'Full-Spectrum Hemp Oil',
      description: 'Hemp-derived CBD with high cannabinoid & terpene retention.',
      icon: 'fas fa-tint',
      image: 'https://hempsi.com/wp-content/uploads/2019/08/dropper-1.jpg',
    },
    {
      name: 'CBD Distillate',
      description: 'Purified broad-spectrum oil, distilled to remove terpenes, fats & lipids.',
      icon: 'fas fa-flask',
      image: 'https://hempsi.com/wp-content/uploads/2019/08/distillate.jpg'
    },
    {
      name: 'Water-Soluable CBD',
      description: 'Using nanoemulsion, CBD oil is rendered soluble for beverages.',
      icon: 'fas fa-water',
      image: 'https://hempsi.com/wp-content/uploads/2019/08/water.jpg'
    },
    {
      name: 'CBD Isolate',
      description: 'CBD molecule isolated from other compounds, delivered in a fine crystalline powder form.',
      icon: 'fas fa-cannabis',
      image: 'https://hempsi.com/wp-content/uploads/2019/08/powder.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
