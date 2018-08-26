import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OnSalesPipe } from './onsale.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SaleComponent } from './sale/sale.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { ZestimateComponent } from './zestimate/zestimate.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SaleComponent,
    RentComponent,
    BuyComponent,
    ZestimateComponent,
    HomeComponent,
    OnSalesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
