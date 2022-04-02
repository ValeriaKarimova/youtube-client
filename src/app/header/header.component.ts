import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchSubmit = new EventEmitter();
  @Output() emitFilterClick = new EventEmitter();

  snowResults() {
    this.searchSubmit.emit(true);
  }

  showFilter() {
    this.emitFilterClick.emit(true);
  }
}
