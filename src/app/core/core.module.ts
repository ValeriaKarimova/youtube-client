import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SortingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SortingComponent,
  ]
})
export class CoreModule {}
