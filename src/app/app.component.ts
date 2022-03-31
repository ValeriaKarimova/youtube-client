import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'youtube-client';
  public isVisible = false;
  public isFilterShown = false;

  changeVisibility() {
    this.isVisible = true;
  }

  showFilter() {
    this.isFilterShown = !this.isFilterShown;
  }
}
