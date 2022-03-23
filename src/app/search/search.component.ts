import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public isFilterVisible = false;

  ngOnInit(): void {
  }

  changeFilterVisibility() {
    this.isFilterVisible = !this.isFilterVisible;
  }
}
