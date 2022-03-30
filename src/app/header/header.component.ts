import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public resultsValue: boolean = false;
  @Output() results = new EventEmitter();

  snowResults() {
    this.results.emit(this.resultsValue = true);
  }
}
