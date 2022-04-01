import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item, SortingType, ViewConfig } from '../../services/interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnChanges {
  public data: Array<Item> = [];
  public ascendingOrder = true;
  @Input() isShown: Boolean = false;
  @Input() declare viewConf: ViewConfig;

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty('viewConf') && !changes['viewConf'].firstChange) {
          this.sortCards();
      }
    }
  }

  sortCards() {
    if (this.viewConf.ascending) {
      this.sortAscending()
    } else {
      this.sortDescending();
    }
  }

  sortDescending() {
    if (this.viewConf.type === SortingType.date) {
      this.data.sort(function (a: Item, b: Item) {
        const firstDate = Date.parse(a.snippet.publishedAt);
        const nextDate = Date.parse(b.snippet.publishedAt);
        return +nextDate - +firstDate;
      });
    } else if (this.viewConf.type === SortingType.views) {
      this.data.sort(function (a: Item, b: Item) {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    }
  }

  sortAscending() {
    if (this.viewConf.type === SortingType.date) {
      this.data.sort(function (a: Item, b: Item) {
        const firstDate = Date.parse(a.snippet.publishedAt);
        const nextDate = Date.parse(b.snippet.publishedAt);
        return +firstDate - +nextDate;
      });
    } else if (this.viewConf.type === SortingType.views) {
      this.data.sort(function (a: Item, b: Item) {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    }
  }

  async getData() {
    const response = await fetch('../assets/response.json');
    const result = await response.json();
    this.data = result.items;
  }
}
