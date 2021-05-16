import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders:string[]=['orden1', 'orden2'];
  displayedColumns: string[] = ['titulo','actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
