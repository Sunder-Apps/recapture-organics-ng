import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Item } from '../objects/item';
import { Variation } from '../objects/variation';

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
    this.shopService.obsCatalog.subscribe(catalog => {this.catalog = catalog;console.log(catalog)})
  }

  ngOnInit() {
    this.catalog = this.shopService.catalog
    if (!this.catalog) {
      this.shopService.updateCatalog()
    }
  }

  addToCart (itemID: string, variationID: string) {
    alert('hi')
    this.shopService.setQuantity(itemID, variationID, 1)
  }

  updateCart (itemID: string, variationID: string, event) {
    if (event && event.target) {
      let val = event.target.value
      let int = parseInt(val)
      if (!isNaN(int) && int >= 0 && int <= 100) {
        this.shopService.setQuantity(itemID, variationID, int)
      }
    }
  }
}
