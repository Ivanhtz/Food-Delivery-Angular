import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  foodDetails = [
    {
      id: 1,
      foodName: 'Pan Grilled Sandwich',
      foodDetails: 'Pan Frito a la Parrilla',
      foodPrice: 5,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq',
    },
    {
      id: 2,
      foodName: 'Pizza Vegana Suprema',
      foodDetails: 'Cebolla, maíz, patata, paprica, pimenton',
      foodPrice: 12,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k',
    },
    {
      id: 3,
      foodName: 'Burger',
      foodDetails: 'Burguer',
      foodPrice: 8,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k',
    },
    {
      id: 4,
      foodName: 'Royo Masala',
      foodDetails: 'Patata, salsas y muchas especias indias',
      foodPrice: 9,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7',
    },
    {
      id: 5,
      foodName: 'Brownie de Chocolate',
      foodDetails: 'Para los amantes del chocolate',
      foodPrice: 6,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv',
    },
    {
      id: 6,
      foodName: 'Helado de Oreo',
      foodDetails: 'Con mucha galleta Oreo',
      foodPrice: 8,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6',
    },
  ];
}
