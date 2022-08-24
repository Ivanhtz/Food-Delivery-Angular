import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private food: ProductsService) {}

  dataFood: any;

  ngOnInit(): void {
    this.dataFood = this.food.foodDetails;
  }
}
