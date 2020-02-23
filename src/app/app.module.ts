import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HamsterComponent } from './hamster/hamster.component';
import { BasketComponent } from './basket/basket.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { PlusComponent } from './plus/plus.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HamsterComponent,
    BasketComponent,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
