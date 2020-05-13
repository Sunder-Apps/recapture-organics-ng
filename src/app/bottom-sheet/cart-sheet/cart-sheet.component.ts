import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-cart-sheet',
  templateUrl: './cart-sheet.component.html',
  styleUrls: ['./cart-sheet.component.less']
})
export class CartSheetComponent implements OnInit {

  constructor(
    private cartSheetRef: MatBottomSheetRef<CartSheetComponent>,
    private shopService: ShopService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) { }

  ngOnInit() { }

  updateCart (itemID: string, variationID: string, event) {
    if (event && event.target) {
      let val = event.target.value
      let int = parseInt(val)
      if (!isNaN(int) && int >= 0 && int <= 100) {
        this.shopService.setQuantity(itemID, variationID, int)
      }
    }
  }

  dismiss () {
    this.cartSheetRef.dismiss();
  }

  removeItem (itemID: string, variationID: string) {
    this.shopService.removeItem(itemID, variationID)
  }

  addItem (itemID: string, variationID: string) {
    this.shopService.addItem(itemID, variationID)
  }

  clearItem (itemID: string, variationID: string) {
    this.shopService.clearItem(itemID, variationID)
  }
}
