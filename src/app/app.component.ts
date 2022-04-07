import { Component } from '@angular/core';
import { ViewConfig, SortingType } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'youtube-client';
  public isVisible = false;
  public isFilterShown = false;
  public conf: ViewConfig;
  public filterConf: string;

  constructor() {
    this.filterConf = '';
    this.conf = {
      ascending: false,
      type: SortingType.none,
      pattern: '',
    };
  }

  changeVisibility() {
    this.isVisible = true;
  }

  showFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  sortCards(type: SortingType) {
    const clone = Object.assign({}, this.conf);

    if (type === clone.type) {
      clone.ascending = !clone.ascending;
    }
    clone.type = type;
    this.conf = clone;
  }

  filterCards(param: string) {
    this.filterConf = param;
  }
}
