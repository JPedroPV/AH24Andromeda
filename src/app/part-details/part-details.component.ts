import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part, parts } from '../parts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrl: './part-details.component.css'
})
export class PartDetailsComponent implements OnInit{

  part: Part | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const partIdFromRoute = Number(routeParams.get('partId'));
    this.part = parts.find(part => part.id === partIdFromRoute);
  }

  addToCart(part: Part) {
    this.cartService.addToCart(part);
    window.alert('Your part has been added to the cart!');
  }
}