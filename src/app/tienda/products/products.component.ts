import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos: Product[] = [
    {
      id: '1',
      title: 'Airpod',
      description: 'Música sin límites',
      price: 10,
      image: 'assets/images/airpod.png'
    }, {
      id: '2',
      title: 'Alexa',
      description: 'Asistente personal ideal para que sea tu asistente en el lugar que te guste..',
      price: 150,
      image: 'assets/images/alexa.jpg'
    }, {
      id: '3',
      title: 'Teclado',
      description: 'Teclado',
      price: 40,
      image: 'assets/images/partes.jpg'
    }, {
      id: '4',
      title: 'Computador',
      description: 'Computador gamming',
      price: 1563,
      image: 'assets/images/pc1.jpg'
    }, {
      id: '5',
      title: 'Setup',
      description: 'Disfruta de trabajar y jugar',
      price: 5230,
      image: 'assets/images/setup.jpg'
    }, {
      id: '6',
      title: 'Tablet',
      description: 'Diseña como los dioses',
      price: 360,
      image: 'assets/images/tablet.jpg'
    }, {
      id: '7',
      title: 'Tablet pro',
      description: 'Diseña como los dioses PRO',
      price: 360,
      image: 'assets/images/tablet2.jpg'
    }, {
      id: '8',
      title: 'Xiaomi',
      description: 'Xiaomi para todo uso',
      price: 10,
      image: 'assets/images/xiaomi.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number): void {
    console.log('producto:' + id);
  }

}
