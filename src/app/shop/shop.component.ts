import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Catalog } from '../objects/catalog';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  catalog: Catalog
  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.shopService.obsCatalog.subscribe((catalog: Catalog) => {
      this.catalog = catalog
    })
  }
}
