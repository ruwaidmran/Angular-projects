import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
recipes : Recipe[]=[
  new Recipe('name','description','https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?w=740&t=st=1683805112~exp=1683805712~hmac=3c3ad47bdb7ad0622f5a59060832719dde61a723ea75df82649b93eaea24aa0f')
];

constructor(){}
ngOnInit(): void {
  
}
}
