
import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  storeProducts = [
    {
      name: 'Protein Powder',
      description: 'High-quality protein powder for muscle recovery.',
      price: 39.99,
      image: 'https://media.istockphoto.com/id/908200744/photo/the-whey-protein-in-scoop.jpg?s=612x612&w=0&k=20&c=V3PjUsuZCs1Xu8Wzr3XdgFigNMaK-qcbzBb5O19D908='
    },
    {
      name: 'Fitness Tracker',
      description: 'Track your daily activities and monitor your fitness progress.',
      price: 79.99,
      image: "data:image/jpeg;base64,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"
    },
    {
      name: 'Organic Snack Bars',
      description: 'Healthy and delicious snack bars made from organic ingredients.',
      price: 2.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoT6eiF_-rucZZzwmppVtDr2bPP5tJ418Pw&usqp=CAU'
    },
    {
      name: 'Yoga Mat',
      description: 'Premium yoga mat for comfortable workouts and stretching exercises.',
      price: 39.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMN0qK6YFRoltVc8p1P65k2YBKVVr-MKmYlahuRSQtjI4kgLWgXYOTsaRXZ8u6y82GNA&usqp=CAU'
    },
    {
      name: 'Dumbbells',
      description: 'Dumbbells are free weights used in strength training and fitness exercises. ',
      price: 59.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHlBCIA-W9iWtls2OXMsiWS6hpGkCBYqviw&usqp=CAU'
    },
  
    {
      name: 'Weight Gain Pills',
      description: ' It increasing appetite or promoting the retention of fluids. ',
      price: 29.99,
      image:'https://thumbs.dreamstime.com/b/there-several-types-weight-gain-pills-available-generally-work-increasing-appetite-promoting-retention-281808424.jpg'
    },
    {
      name: 'Herbalife',
      description:'It  designed to support a healthy life-style through balanced nutrition and wellness.',
      price: 39.99,
      image:'https://m.media-amazon.com/images/I/4120HzT7wgL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      name: 'Sports-Cloth',
      description:'These shirts are crafted with perfor-mance,comfort,and breathability in mind.',
      price: 29.99,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNh8xhsE0F8-qGu_rTgRxaT_wp5WDiD7euKagSVMltR_v3nrdla74uuRSTgGjWdgr4uA&usqp=CAU'
    },
    {
      name: 'Herbalife',
      description:'A healthy meal replacement that fulfills nutritional needs of the body.',
      price: 39.99,
      image:'data:image/jpeg;base64,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'
    }
  ];

  addToCart(product: any) {
    alert(`Added ${product.name} to the cart. Continue shopping or proceed to checkout.`);
    // Add additional logic for handling the cart
  }
  cart(product:any)
  {
    alert("added");
  }
}
