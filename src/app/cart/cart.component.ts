import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Item } from '../objects/item';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { CartSheetComponent } from '../bottom-sheet/cart-sheet/cart-sheet.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  total: number = 0
  numItems: number = 0

  private bottomSheetRef: MatBottomSheetRef
  catalog: Item[]
  constructor(
    private shopService: ShopService,
    private bottomSheet: MatBottomSheet
  ) {
    this.shopService.obsCatalog.subscribe(catalog => this.catalog = catalog)
  }

  ngOnInit() {
    this.catalog = this.shopService.catalog
  }

  openCart () {
    this.bottomSheetRef = this.bottomSheet.open(CartSheetComponent, {
      ariaLabel: 'Cart',
      data: this.catalog
    })
  }
}
