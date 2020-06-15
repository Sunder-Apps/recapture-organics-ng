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
  numItems: number = 1
  open: boolean = false
  changed: boolean = false

  private bottomSheetRef: MatBottomSheetRef
  catalog: Item[]
  constructor(
    private shopService: ShopService,
    private bottomSheet: MatBottomSheet
  ) {
    this.shopService.obsCatalog.subscribe(catalog => this.updateCart())
  }

  ngOnInit() {
    this.updateCart()
  }

  openCart () {
    this.bottomSheetRef = this.bottomSheet.open(CartSheetComponent, {
      ariaLabel: 'Cart',
      data: this.catalog
    })
  }

  updateCart () {
    console.log('updateCart')
    this.catalog = this.shopService.catalog
    this.total = 0
    this.numItems = 0
    this.open = false
    if (this.catalog) {
      this.catalog.forEach(item => {
        item.item_data.variations.forEach(variation => {
          this.numItems += variation.quantity || 0
          this.total += (variation.quantity || 0) * variation.item_variation_data.price_money.amount
        })
      })
    }
    if (this.numItems > 0) {
      this.open = true
      this.changed = true;
      setTimeout(()=>{ 
        this.changed = false;
       }, 1000)
    } else {
      this.open = false
      this.changed = false;
      if (this.bottomSheetRef) {
        this.bottomSheetRef.dismiss()
      }
    }
  }
}
