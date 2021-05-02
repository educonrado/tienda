import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'tienda';
  items = ['edu', 'conrado', 'zapata'];
  base = 1;
  expo = 2;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push(this.title);
  }

  delete(index: number): void {
    this.items.splice(index, 1);
  }

}
