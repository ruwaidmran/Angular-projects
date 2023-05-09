import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}
productTitle: string = 'Products';

//// Add Section on produts temporary hide code
showSection: boolean=false;
createSection(){
  this.showSection = true;
}

//// practice Add Section on produts temporary hide code
paraGraph: boolean=false;
createSec(){
this.paraGraph=true;
}

}
