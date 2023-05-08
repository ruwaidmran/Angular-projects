import {
  Component,
  OnInit
} from '@angular/core';

import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'A Recipe details', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'),
    new Recipe('A test Recipe', 'A Recipe details', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg')
  ];
  constructor() {}
  ngOnInit() {}
}
