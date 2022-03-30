import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../services/interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public data: Array<Item> = [];
  @Input() isShown: Boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const response = await fetch('../assets/response.json');
    const result = await response.json();
    this.data = result.items;
  }
}
