import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id:1,
      name:'Minimalists Analog Watch',
      price: '110',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image1.jpg'
    },

    {id:2,
      name:'Hisense Ultra HD Smart TV',
      price: '45500',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image2.jpg'
    },

    {id:3,
      name:'Apple Iphone 12',
      price: '85000',
      color: 'White',
      available: 'Available',
      image: '/assets/products/product-image3.jpg'
    },

    {id:4,
      name:'LG Fully Automatic Washing Machine',
      price: '21500',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image4.png'
    },

    {id:5,
      name:'LG Refrigerator with Door Cooling',
      price: '65700',
      color: 'White',
      available: 'Not Available',
      image: '/assets/products/product-image5.jpg'
    },

    {id:6,
      name:'Minimalists Analog Watch',
      price: '110',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image1.jpg'
    },
  ]

}
