import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
productTitle: string = 'Products';



showSection: boolean=false;
createSection(){
  this.showSection = true;
}
}
