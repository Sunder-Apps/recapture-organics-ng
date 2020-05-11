import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Item } from '../objects/item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {
  catalog: Item[]
  constructor(
    private shopService: ShopService
  ) {
    this.shopService.obsCatalog.subscribe((catalog: Item[]) => {
      this.catalog = catalog
    })
  }

  ngOnInit() { }
}
