import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableAreaComponent } from './components/table-area/table-area.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer), // NgRx will create a store automatically
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
