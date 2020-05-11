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
  variations: Variation[]
  constructor(
    private shopService: ShopService
  ) {
    console.log('shopConstruct')
    this.shopService.obsCatalog.subscribe((catalog: Item[]) => {
      this.catalog = catalog
      this.updateVariations()
    })
  }

  ngOnInit() {
    this.catalog = this.shopService.catalog
    this.updateVariations()
    if (!this.catalog) {
      this.shopService.updateCatalog()
    }
  }

  updateVariations () {
    this.variations = []
    if (this.catalog) {
      this.catalog.forEach(item => {
        
        this.variations.concat(item.item_data.variations)
        console.log(item.item_data.variations, this.variations)
      })
    }
    console.log('updateVariations', this.catalog, this.variations)
  }
}
