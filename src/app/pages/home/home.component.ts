import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private product: ProductsService) {}

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.product.foodDetails;
  }
}
