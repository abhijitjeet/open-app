import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '././components/getting-started-page/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { BigBlobComponent } from './components/shared-components/big-blob/big-blob.component';
import { SmallBlobComponent } from './components/shared-components/small-blob/small-blob.component';
import { AccountingDotComponent } from './components/shared-components/accounting-dot/accounting-dot.component';
import { SuperTextBoxComponent } from './components/shared-components/super-text-box/super-text-box.component';
import { ImageBoxComponent } from './components/shared-components/image-box/image-box.component';
import { InfoCardsComponent } from './components/shared-components/info-cards/info-cards.component';
import { AmountSliderComponent } from './components/shared-components/amount-slider/amount-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlobComponent,
    SmallBlobComponent,
    AccountingDotComponent,
    SuperTextBoxComponent,
    ImageBoxComponent,
    InfoCardsComponent,
    AmountSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
