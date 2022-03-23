import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public data: Array<Item> = [];

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const response = await fetch('../assets/response.json');
    const result = await response.json();
    this.data = result.items;
    console.log(this.data);
  }

}
