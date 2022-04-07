import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() submitSearch = new EventEmitter();
  @Output() filterButtonClick = new EventEmitter();

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    this.submitSearch.emit(true);
  }

  handleFilterButtonClick() {
    this.filterButtonClick.emit(true);
  }
}
