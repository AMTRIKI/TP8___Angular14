import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    ListProduitsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
