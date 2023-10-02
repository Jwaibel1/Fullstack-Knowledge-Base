import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-4C.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-4C.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
