import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AlertsComponent } from './alerts/alerts.component'
import { DefaultDialogComponent } from './alerts/default-dialog/default-dialog.component'
import { BackgroundComponent } from './background/background.component'
import { FooterComponent } from './footer/footer.component'
import { CryptoService } from './crypto/crypto.service'
import { SettingsService } from './settings/settings.service'
import { StorageService } from './storage/storage.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatDialogModule, MatTooltipModule } from '@angular/material'
import { BarsComponent } from './bars/bars.component'
import { LeftComponent } from './bars/left/left.component'
import { AnalysisComponent } from './analysis/analysis.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotFoundComponent,
    AlertsComponent,
    DefaultDialogComponent,
    BackgroundComponent,
    FooterComponent,
    BarsComponent,
    LeftComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [
    CryptoService,
    SettingsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
