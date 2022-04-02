import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortingType } from 'src/services/interfaces';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})

export class SortingComponent {
  @Input() isFilter: boolean = false;
  @Output() typeEmmiter = new EventEmitter();
  @Output() filterEmmiter = new EventEmitter();

  public ascendingOrder = true;

  startSorting(event: MouseEvent) {
    if (event.target === null) return;
    const target = event.target as HTMLElement;
    switch (target.innerText) {
      case 'date': {
        this.typeEmmiter.emit(SortingType.date);
        break;
      }
      case 'count of views': {
        this.typeEmmiter.emit(SortingType.views);
        break;
      }
    }
  }

  startFiltration(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterEmmiter.emit(target.value);
  }
}
