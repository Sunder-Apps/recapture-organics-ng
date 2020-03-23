import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products:any[] = [
    {
      name: 'Full-Spectrum Hemp Oil',
      description: 'Containing the exact cannabinoid and terpene profile as the flower that bore it, Full-Spectrum Hemp Oil gives you the complete cannabinoid experience, harnessing the power of the entourage effect.',
      icon: 'fas fa-rainbow',
      image: 'https://i.imgur.com/0yLPKhJ.jpg'
    },
    {
      name: 'Broad-Spectrum Hemp Oil',
      description: 'Broad-Spectrum Hemp Oil is guaranteed THC-free! While the Full-Spectrum Hemp Oil contains under the legal limit of 0.3% THC, this oil contains none.  Perfect for those who must pass a drug test or who don\'t like the effects of THC.',
      icon: 'fas fa-chart-pie',
      image: 'https://i.imgur.com/u5ZXs4E.jpg'
    },
    {
      name: 'Full-Spectrum Healing Balm',
      description: 'Find relief from pain with our Full-Spectrum Healing Balm.  Rub on the area of pain and wait 1 to 2 hours for relief.',
      icon: 'fas fa-rainbow',
      image: 'https://i.imgur.com/zV97G87.jpg'
    },
    {
      name: 'Broad-Spectrum Healing Balm',
      description: 'Find relief from pain with our Broad-Spectrum Healing Balm without the effects of THC.  Rub on the area of pain and wait 1 to 2 hours for relief.',
      icon: 'fas fa-chart-pie',
      image: 'https://i.imgur.com/MQyS5vH.jpg'
    }
  ]
  constructor() { }

  ngOnInit() { }
}
