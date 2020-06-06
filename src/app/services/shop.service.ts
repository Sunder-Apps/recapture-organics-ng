import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../objects/item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private getItemsUrl: string = 'https://recapture-organics-fn.azurewebsites.net/api/GetItems?code=xLQm9Q/wzwDMIGs2gaIQVga4xf0djqUDImLxKaUEDwpanDmj1hU3JQ=='
  public catalog: Item[]
  private subCatalog: Subject<Item[]> = new Subject<Item[]>()
  public obsCatalog = this.subCatalog.asObservable()

  constructor(
    private httpClient: HttpClient
  ) { }

  updateCatalog () {
    this.httpClient.get<any>(this.getItemsUrl).subscribe(data => {
      this.subCatalog.next(data.objects)
    })
    console.log(this.catalog)
  }

  setQuantity (itemID: string, variationID: string, quantity: number) {
    if (quantity > -1 && quantity < 100) {
      if (this.catalog) {
        let variation = this.catalog.find(item => item.id == itemID).item_data.variations.find(variation => variation.id == variationID)
        if (variation) {
          variation.quantity = quantity
          this.subCatalog.next(this.catalog)
        }
      }
    }
  }

  removeItem (itemID: string, variationID: string) {
    if (this.catalog) {
      let variation = this.catalog.find(item => item.id == itemID).item_data.variations.find(variation => variation.id == variationID)
      if (variation) {
        this.setQuantity(itemID, variationID, variation.quantity - 1)
      }
    }
  }

  addItem (itemID: string, variationID: string) {
    if (this.catalog) {
      let variation = this.catalog.find(item => item.id == itemID).item_data.variations.find(variation => variation.id == variationID)
      if (variation) {
        this.setQuantity(itemID, variationID, variation.quantity + 1)
      }
    }
  }

  clearItem (itemID: string, variationID: string) {
    if (this.catalog) {
      let variation = this.catalog.find(item => item.id == itemID).item_data.variations.find(variation => variation.id == variationID)
      if (variation) {
        this.setQuantity(itemID, variationID, 0)
      }
    }
  }
}
