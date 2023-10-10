import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://www.allrecipes.com/thmb/lkmpKIBFPRbfATPBoR8E57KimqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-DDMFS-4x3-4266734872014eeebaeddbe56452e18d.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test',
      'https://sugarspunrun.com/wp-content/uploads/2021/11/The-best-vanilla-cake-recipe-1-of-1.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
