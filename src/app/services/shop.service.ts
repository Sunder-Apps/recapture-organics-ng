import { Injectable } from '@angular/core';
import { Catalog } from '../objects/catalog';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private catalog: Catalog
  private subCatalog: Subject<Catalog> = new Subject<Catalog>()
  public obsCatalog = this.subCatalog.asObservable()

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get('https://sunder-functions20190319082035.azurewebsites.net/api/ROGetItems?code=HY2haXS0ndupb2u3dZEtkHaQ3QYONMLtgLH/2vW3Vd3vYMv4lwcdMg==').subscribe(data => {
      console.log(data);
    })
  }
}
