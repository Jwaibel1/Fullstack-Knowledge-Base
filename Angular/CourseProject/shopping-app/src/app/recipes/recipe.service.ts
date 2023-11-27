import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  /* private recipes: Recipe[] = [
    new Recipe(
      'Delicious Donuts',
      'Best Dessert, Glazed Donuts, Fight me!',
      'https://www.allrecipes.com/thmb/lkmpKIBFPRbfATPBoR8E57KimqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-DDMFS-4x3-4266734872014eeebaeddbe56452e18d.jpg',
      [
        new Ingredient('Flour', 2),
        new Ingredient('Sugar', 5),
        new Ingredient('Fry Oil', 1),
      ]
    ),
    new Recipe(
      'Chocolate Cake',
      'A classic for all.',
      'https://sugarspunrun.com/wp-content/uploads/2021/11/The-best-vanilla-cake-recipe-1-of-1.jpg',
      [
        new Ingredient('Flour', 10),
        new Ingredient('Cocoa Powder', 5),
        new Ingredient('Eggs', 20),
      ]
    ),
  ]; */

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
