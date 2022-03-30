import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public results: Boolean = false;
  @Output() submitSearch = new EventEmitter();

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    this.submitSearch.emit(this.results = true);
  }
}
