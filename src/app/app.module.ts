import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { GoogleChartsModule } from 'angular-google-charts'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AlertsComponent } from './alerts/alerts.component'
import { DefaultDialogComponent } from './alerts/default-dialog/default-dialog.component'
import { FooterComponent } from './footer/footer.component'
import { CryptoService } from './services/crypto.service'
import { SettingsService } from './services/settings.service'
import { StorageService } from './storage/storage.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatDialogModule, MatTooltipModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatListModule, MatBottomSheetModule } from '@angular/material'
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component'
import { ShopService } from './services/shop.service'
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartSheetComponent } from './bottom-sheet/cart-sheet/cart-sheet.component';
import { LearnComponent } from './learn/learn.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotFoundComponent,
    AlertsComponent,
    DefaultDialogComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    ShopComponent,
    CartComponent,
    CartSheetComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatBottomSheetModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    CryptoService,
    SettingsService,
    StorageService,
    ShopService
  ],
  entryComponents: [
    DefaultDialogComponent,
    CartSheetComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
