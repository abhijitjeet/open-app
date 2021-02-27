import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '././components/getting-started-page/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BigBlobComponent } from './components/shared-components/big-blob/big-blob.component';
import { SmallBlobComponent } from './components/shared-components/small-blob/small-blob.component';
import { AccountingDotComponent } from './components/shared-components/accounting-dot/accounting-dot.component';
import { SuperTextBoxComponent } from './components/shared-components/super-text-box/super-text-box.component';
import { ImageBoxComponent } from './components/shared-components/image-box/image-box.component';
import { InfoCardsComponent } from './components/shared-components/info-cards/info-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlobComponent,
    SmallBlobComponent,
    AccountingDotComponent,
    SuperTextBoxComponent,
    ImageBoxComponent,
    InfoCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
