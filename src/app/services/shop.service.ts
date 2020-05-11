import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../objects/item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private getItemsUrl: string = 'https://sunder-functions20190319082035.azurewebsites.net/api/ROGetItems?code=HY2haXS0ndupb2u3dZEtkHaQ3QYONMLtgLH/2vW3Vd3vYMv4lwcdMg=='
  private locationID: string = 'R7GBGZNS5QYQV'
  public catalog: Item[]
  private subCatalog: Subject<Item[]> = new Subject<Item[]>()
  public obsCatalog = this.subCatalog.asObservable()

  constructor(
    private httpClient: HttpClient
  ) { }

  updateCatalog () {
    this.httpClient.get<any>(this.getItemsUrl).subscribe(data => {
      this.catalog = data.objects.filter((item: Item) => {
        return item.present_at_location_ids.includes(this.locationID)
      });
      this.subCatalog.next(this.catalog)
    })
  }

  setQuantity (itemID: string, variationID: string, quantity: number) {
    if (quantity > -1 && quantity < 100) {
      if (this.catalog) {
        let variation = this.catalog.find(item => item.id == itemID).item_data.variations.find(variation => variation.id == variationID);
        if (variation) {
          variation.quantity = quantity
          this.subCatalog.next(this.catalog)
        }
      }
    }
  }
}
