import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
  ],
  exports: [SearchResultsComponent]
})

export class YoutubeModule { }

